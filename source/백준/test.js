const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, m, ...a] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/);

const arr = a.map((e) => Number(e));

const getCombinations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};
const reducer = (accumulator, curr) => accumulator + curr;
const newArr = getCombinations(arr, 3).map((e) => {
  const sum = e.reduce(reducer);
  return sum > m ? 0 : sum;
});

console.log(Math.max(...newArr));
