const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

arr.sort((a, b) => a - b);

arr.map((e) => console.log(e));
