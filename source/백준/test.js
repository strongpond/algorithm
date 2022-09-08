const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function solution(n) {
  const result = [];

  function hanoi(n, from, to) {
    const arr = [];
    let temp = 1;
    let by = 6 - from - to;

    while (temp > 0) {
      while (n > 1) {
        arr.push(to);
        arr.push(by);
        arr.push(from);
        arr.push(n);
        n--;
        arr.push(to);
        to = by;
        by = arr.pop();
      }

      result.push([from, to]);

      if (arr.length - 1 > 0) {
        n = arr.pop();
        from = arr.pop();
        by = arr.pop();
        to = arr.pop();
        result.push([from, to]);
        n--;
        arr.push(from);
        from = by;
        by = arr.pop();
      } else {
        temp = 0;
      }
    }
  }

  hanoi(n, 1, 3);
  return result;
}

solution(input);

/* let cnt = Math.pow(2, input) - 1;
let result = [];

const hanoi = (n, a, b, c) => {
  if (n == 0) return;
  else {
    hanoi(n - 1, a, c, b);
    result.push(`${a} ${c}`);
    hanoi(n - 1, b, a, c);
  }
};

function sol(n) {
  hanoi(n, 1, 2, 3);

  return result;
}

sol(input);

console.log(cnt);
result.map((e) => console.log(e)); */

/* let cnt = Math.pow(2, input) - 1;
let result = [];

function hanoi(n, a, b, c) {
  if (n == 0) return;
  else {
    hanoi(n - 1, a, c, b);
    result.push(`${a} ${c}`);
    hanoi(n - 1, b, a, c);
  }
}

hanoi(input, 1, 2, 3);

console.log(cnt);
result.map((e) => console.log(e)); */
