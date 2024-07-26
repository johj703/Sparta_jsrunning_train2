/*
  3. 얕은, 깊은 복사
  예시
*/

```javascript

const student = {
  name: "yuno",
  age: "30",
  skill: ["javascript"],
  address: {
    city: "seoul"
  }
};

```;
// 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
const shallowCopy = { ...student };

// 깊은 복사를 수행하여 deepCopy를 만들어주세요.
const deepCopy = JSON.parse(JSON.stringify(student));

// 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
console.log("1. 원본 객체(student)와 얕은 복사 객체가 같을까요?");

// 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?");

// 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요?");

// 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?");
