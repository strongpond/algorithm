const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// const [n, ...arr] = ['3', '21 Junkyu', '21 Dohyun', '20 Sunyoung'];

const user = arr.map((e) => e.split(" ")).sort((a, b) => a[0] - b[0]);

user.map((e) => console.log(`${e[0]} ${e[1]}`));
