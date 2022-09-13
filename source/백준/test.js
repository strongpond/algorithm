const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const person = arr.map((e) => e.split(" ").map(Number));

let result = [];

const weight = person.map((e) => e[0]);
const height = person.map((e) => e[1]);

for (let i = 0; i < n; i++) {
  let rank = 1;
  for (let j = 0; j < n; j++) {
    if (weight[i] < weight[j] && height[i] < height[j]) {
      rank += 1;
    }
  }
  result.push(rank);
}

console.log(result.join(" "));
