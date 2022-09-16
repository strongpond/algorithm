# x만큼 간격이 있는 n개의 숫자

[문제 보러가기](https://school.programmers.co.kr/learn/courses/30/lessons/12954)

### :heavy_check_mark: 내가 푼 답안

```javascript
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
```

### :heavy_check_mark: 원래 푼 답안

```javascript
function solution(x, n) {
  var answer = [];
  let sum = x;
  let i = 0;
  while (i < n) {
    answer.push(sum);
    sum += x;
    i++;
  }
  return answer;
}
```

### 느낀점 및 풀이과정

- for문 외에 다른 더 간단힌 풀이가 분명 있을 것 같았는데 도무지 생각이 나지 않았다.

- 찾다보니 Array(n).fill(x) ~~x로 채워진 n크기의 배열~~에 map으로 인덱스에 x만큼 곱해주면 되는 풀이가 있었다. 되게 신박하고 간단한 방법이었다.

<hr/>

### :heavy_check_mark: 참고하면 좋은 다른 답안

```javascript
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
```

<hr/>
