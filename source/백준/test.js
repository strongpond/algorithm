const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, m, ...inputArr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/);

const B = "BWBWBWBW";
const W = "WBWBWBWB";

const black = color(B, W);
const white = color(W, B);

let result = n * m;

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    paintCount(j, i);
  }
}

console.log(result);

// 8x8 배열 생성 함수
function color(a, b) {
  const c = new Array(8).fill(a).map((e, index) => {
    if (index % 2 == 1) e = b;
    return e;
  });
  return c;
}

// 배열 비교 함수
function paintCount(x, y) {
  let cntWhite = 0;
  let cntBlack = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (inputArr[i][j] !== white[i - y][j - x]) cntWhite++;
      if (inputArr[i][j] !== black[i - y][j - x]) cntBlack++;
    }
  }

  let min = cntWhite < cntBlack ? cntWhite : cntBlack;
  if (min < result) result = min;
}
