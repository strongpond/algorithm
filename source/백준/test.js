const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const coordinate = arr.map((e) => e.split(" ").map(Number));
let result = "";

coordinate
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  .forEach((e) => {
    result += `${e[0]} ${e[1]}\n`;
  });

console.log(result);
