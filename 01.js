/*
  1. 얕은 복사
  해당 문제를 출력해 보고 출력 값을 설명해주세요
*/

1;
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);

```javascript
// 문제 풀이
// 첫 번째 'console.log(arr1);'의 출력 값은 [10, 2, 3] 입니다.
// 이유는 14번째 줄에서 3개의 인덱스(1, 2, 3)를 가지는 arr1 배열을 생성했습니다. 그 이후 arr1 배열을 arr2라는 변수에 재할당을 실행한 것입니다.
// 재할당을 한 arr2배열의 0번째 요소의 값을 10으로 재할당시켰기 때문에 'console.log(arr1);'의 값은 [10, 2, 3] 입니다.
//
// 두 번째 'console.log(arr1 === arr2)'의 값은 true입니다.
// 이유는 14번째 줄에서 arr1 배열을 생성을 했고, 생성한 arr1 배열을 arr2 변수에 다시 재할당을 했기 때문에 arr1과 arr2를 비교하는 연산자로 'arr1 === arr2'을 사용했기 때문에 true가 나타나게 됩니다.

```;

2;
// const obj1 = {a: 1, b: 2, c: 3};
// const obj2 = // obj1을 얕은 복사하는 코드로 작성해주세요

/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */

/* 해당값 obj1, obj2의 값을 출력해주세요 */

// 문제 풀이
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1 };
obj2.d = 4; // obj2에 d요소를 추가하고 d의 값을 4로 할당시킵니다.
console.log(obj1); // 출력값 => {a: 1, b: 2, c: 3}
console.log(obj2); // 출력값 => {a: 1, b: 2, c: 3, d: 4}
