# 문제번호 문제제목

[문제 보러가기](https://school.programmers.co.kr/learn/courses/30/lessons/92335)

### :heavy_check_mark: 내가 푼 답안

```javascript
function solution(n, k) {
  let a = n
    .toString(k)
    .split(0)
    .filter((e) => e !== "1" && e !== "");
  let b = a.filter((e) => isPrime(e)).length;
  return b;
}

function isPrime(a) {
  const n = parseInt(a);
  if (n <= 1) return false;
  if (n % 2 === 0) return n === 2 ? true : false;

  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
```

### 느낀점 및 풀이과정

- 풀이과정
  1. toString 함수로 진법 변환 후 0을 기준으로 split
  2. filter 함수로 요소가 1이거나 공백인 것 제거
  3. 배열 a의 요소중 소수의 개수 return.

<hr/>
