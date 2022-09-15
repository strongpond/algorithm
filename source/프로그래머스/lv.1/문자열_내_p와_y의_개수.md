# 문자열 내 p와 y의 개수

[문제 보러가기](https://school.programmers.co.kr/learn/courses/30/lessons/12916)

### :heavy_check_mark: 내가 푼 답안

```javascript
function solution(s) {
  var answer = true;
  let pCount = s
    .toLowerCase()
    .split("")
    .filter((e) => e == "p").length;
  let yCount = s
    .toLowerCase()
    .split("")
    .filter((e) => e == "y").length;

  return pCount != yCount ? (answer = false) : answer;
}
```

### :heavy_check_mark: 내가 푼 답안2

```javascript
function solution(s) {
  var answer = true;
  return find(s, "p") != find(s, "y") ? (answer = false) : answer;
}

function find(string, n) {
  let cnt = string
    .toLowerCase()
    .split("")
    .filter((e) => e == n).length;
  return cnt;
}
```

### 사용함수

- **filter()** : 괄호 안 조건식을 만족하는 원소만 리턴해주는 함수

### 느낀점 및 풀이과정

- 처음 풀이에 중복되는 코드가 있어서 두 번째 풀이에는 따로 함수를 만들어 주었다.
- 가독성면에서는 첫번째 풀이가 나은듯 싶기도 하다..

<hr/>
