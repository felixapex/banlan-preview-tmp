// 离线二维码生成（字节模式，纠错等级 L，版本 1–5，掩码 0）
// 返回 { size, modules }：modules[y][x] 为 true 表示黑块
(function (root) {
  var EC = { 1: [26, 19], 2: [44, 34], 3: [70, 55], 4: [100, 80], 5: [134, 108] };
  var ALIGN = { 2: 18, 3: 22, 4: 26, 5: 30 };
  var FORMAT_L = ['111011111000100', '111001011110011', '111110110101010', '111100010011101',
    '110011000101111', '110001100011000', '110110101000001', '110100001110110'];

  var EXP = new Array(512), LOG = new Array(256);
  (function () {
    var x = 1;
    for (var i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 0x100) x ^= 0x11d; }
    for (var j = 255; j < 512; j++) EXP[j] = EXP[j - 255];
  })();
  function mul(a, b) { return (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]]; }

  function genPoly(n) {
    var g = [1];
    for (var i = 0; i < n; i++) {
      var next = new Array(g.length + 1).fill(0);
      for (var j = 0; j < g.length; j++) {
        next[j] ^= mul(g[j], 1);
        next[j + 1] ^= mul(g[j], EXP[i]);
      }
      g = next;
    }
    return g;
  }

  function ecc(data, n) {
    var g = genPoly(n), res = data.concat(new Array(n).fill(0));
    for (var i = 0; i < data.length; i++) {
      var c = res[i];
      if (!c) continue;
      for (var j = 0; j < g.length; j++) res[i + j] ^= mul(g[j], c);
    }
    return res.slice(data.length);
  }

  function utf8Bytes(str) {
    var out = [], enc = encodeURIComponent(str);
    for (var i = 0; i < enc.length; i++) {
      if (enc[i] === '%') { out.push(parseInt(enc.substr(i + 1, 2), 16)); i += 2; }
      else out.push(enc.charCodeAt(i));
    }
    return out;
  }

  root.qrEncode = function (text) {
    var bytes = utf8Bytes(text), version = 0;
    for (var v = 1; v <= 5; v++) { if (bytes.length + 2 <= EC[v][1]) { version = v; break; } }
    if (!version) throw new Error('二维码内容过长');
    var total = EC[version][0], dataCap = EC[version][1], ecCount = total - dataCap;

    var bits = [];
    var push = function (val, len) { for (var i = len - 1; i >= 0; i--) bits.push((val >> i) & 1); };
    push(4, 4);
    push(bytes.length, 8);
    bytes.forEach(function (b) { push(b, 8); });
    for (var t = 0; t < 4 && bits.length < dataCap * 8; t++) bits.push(0);
    while (bits.length % 8) bits.push(0);
    var codewords = [];
    for (var i = 0; i < bits.length; i += 8) {
      var b = 0;
      for (var k = 0; k < 8; k++) b = (b << 1) | bits[i + k];
      codewords.push(b);
    }
    var pad = [0xEC, 0x11], p = 0;
    while (codewords.length < dataCap) codewords.push(pad[p++ % 2]);
    var all = codewords.concat(ecc(codewords, ecCount));

    var size = version * 4 + 17;
    var m = [], fn = [];
    for (var y = 0; y < size; y++) { m.push(new Array(size).fill(false)); fn.push(new Array(size).fill(false)); }

    function finder(ox, oy) {
      for (var dy = -1; dy <= 7; dy++) for (var dx = -1; dx <= 7; dx++) {
        var x = ox + dx, y = oy + dy;
        if (x < 0 || y < 0 || x >= size || y >= size) continue;
        fn[y][x] = true;
        var inner = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6;
        var ring = inner && (dx === 0 || dx === 6 || dy === 0 || dy === 6);
        var core = inner && dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        m[y][x] = !!(ring || core);
      }
    }
    finder(0, 0); finder(size - 7, 0); finder(0, size - 7);

    for (var c = 8; c < size - 8; c++) {
      m[6][c] = c % 2 === 0; fn[6][c] = true;
      m[c][6] = c % 2 === 0; fn[c][6] = true;
    }
    if (ALIGN[version]) {
      var a = ALIGN[version];
      for (var dy2 = -2; dy2 <= 2; dy2++) for (var dx2 = -2; dx2 <= 2; dx2++) {
        var ax = a + dx2, ay = a + dy2;
        fn[ay][ax] = true;
        m[ay][ax] = Math.max(Math.abs(dx2), Math.abs(dy2)) !== 1;
      }
    }
    m[size - 8][8] = true; fn[size - 8][8] = true;

    var fmt = FORMAT_L[0];
    var fmtPos = [[0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [7, 8], [8, 8], [8, 7], [8, 5], [8, 4], [8, 3], [8, 2], [8, 1], [8, 0]];
    for (var f = 0; f < 15; f++) {
      var bit = fmt[f] === '1';
      var yy = fmtPos[f][0], xx = fmtPos[f][1];
      m[yy][xx] = bit; fn[yy][xx] = true;
      var y2, x2;
      if (f < 8) { y2 = 8; x2 = size - 1 - f; } else { y2 = size - 15 + f; x2 = 8; }
      m[y2][x2] = bit; fn[y2][x2] = true;
    }

    var idx = 0, dir = -1, col = size - 1;
    while (col > 0) {
      if (col === 6) col--;
      var row = dir === -1 ? size - 1 : 0;
      for (var n = 0; n < size; n++) {
        for (var d = 0; d < 2; d++) {
          var cx = col - d;
          if (fn[row][cx]) continue;
          var dark = false;
          if (idx < all.length * 8) {
            dark = ((all[idx >> 3] >> (7 - (idx & 7))) & 1) === 1;
            idx++;
          }
          if ((row + cx) % 2 === 0) dark = !dark; // 掩码 0
          m[row][cx] = dark;
        }
        row += dir;
        if (row < 0 || row >= size) break;
      }
      dir = -dir;
      col -= 2;
    }
    return { size: size, modules: m };
  };
})(window);
