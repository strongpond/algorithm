# 8958 OX퀴즈

[문제 보러가기](https://www.acmicpc.net/problem/8958)

### :heavy_check_mark: 내가 푼 답안

```javascript
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/);

arr.map((el) => {
  const split = el.split("X");
  const delEmp = split.filter((e) => e !== "");

  const count = delEmp.map((el) => {
    const a = el.split("").length;
    return (a * (a + 1)) / 2;
  });

  const result = count.reduce((acc, cur) => acc + cur, 0);
  return console.log(result);
});
```

### 느낀점

- 처음에 풀었을 때 for문과 while문을 활용해서 문제를 풀었는데 생각하다보니 'X'를 스플릿하고 빈 문자열을 없애준 뒤에는 findO라는 'O'를 찾는 작업을 할 필요가 없다는 생각을 했다(이미 'O'만 남은 상태이기 때문). 따라서 남은 배열의 길이만 세서 계산을 해주면 끝나는 문제였다.

### 원래 풀었던 코드

```javascript
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/);

arr.map((el) => {
  const split = el.split("X");
  const delEmp = split.filter((e) => e !== "");

  const findO = "O";
  let sum = 0;

  for (let i = 0; i < delEmp.length; i++) {
    let cnt = 0;
    let pos = delEmp[i].indexOf(findO);

    while (pos !== -1) {
      cnt++;
      pos = delEmp[i].indexOf(findO, pos + 1);
    }

    for (let j = 0; j <= cnt; j++) {
      sum += j;
    }
  }

  console.log(sum);
});
```

<hr/>
