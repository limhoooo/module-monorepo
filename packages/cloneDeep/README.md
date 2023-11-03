## cloneDeep-h

lodash 의 clonedeep 기능을 Vanilla Js 로 구현한 프로젝트<br>
Javascript 의 데이터타입을 깊은복사까지 복사하게끔 개발

### NPM

```
npm i cloneDeep-h
```

### 지원 데이터타입

원시형데이터타입(String, Number, Boolean, symbol, null, undefined)<br>
참조형데이터타입(object, Array, TypedArray, map, set, Date, RegExp)<br>

### 사용예제

```
const obj1 = {a:'obj', b:[1,2,3]}
const obj2 = cloneDeep(obj1)
console.log(obj1 === obj2) // false
```
