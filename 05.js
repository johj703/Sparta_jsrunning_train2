## 5. forEach로 변환해보기

예시

```javascript

//해당 문제를 forEach로 변경하여 풀어주세요
1. let arr=  [10, 20, 30]

// 해당 로직을 작성하세요

// 결과 값: [100, 200, 300] 출력해주세요

```

// 문제풀이
let arr = [10, 20, 30];
let newArr = [];

arr.forEach(number, index => newArr.push(number * 10));
console.log(newArr);

```javascript
2. let arr=  [10, 22, 33]
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

// 결과값 [10]
```

let newArr = [];
l