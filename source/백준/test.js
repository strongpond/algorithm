const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let n = input;
let cnt = 0;
let arr = [];
let result = 0;

for (i = 0; i < parseInt(n / 5) + 1; i++) {
  cnt += i;
  let remain = n - i * 5;

  if (remain % 3 == 0) {
    cnt += remain / 3;
    arr.push(cnt);
  }

  cnt = 0;
}

result = arr.length > 0 ? Math.min(...arr) : -1;
console.log(result);
