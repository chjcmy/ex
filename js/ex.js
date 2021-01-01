// //원시 값 못바꿈
//
// let str = 'string';
// str[0] = 'S';
//
// console.log(str)
//
// // 입력한 값이 업데이트 되어도 그전값이 저장 되어 있음
//
// let score = 80;
// let copy = score;
//
// console.log(score);
// console.log(copy);
//
// score = 100;
//
// console.log(score);
// console.log(copy);
//
// // 객체는 변경 가능한 값이다
//
// let person = {
//     name : 'lee'
// }
//
// person.name = 'choi'
//
// person.address = 'seoul'
//
// console.log(person)
//
// // 객체 위치 확인
// let person = {
//     name: 'lee'
// }
//
// let copy = person
//
// person.name = 'choi'
//
// copy.address = 'seoul'
//
// console.log(person)
//

// let x = 'global';
//
// const foo = () => {
//     let x ='local';
//     console.log(x);
//     return x;
// }
//
// foo();
//
// console.log(x);

// const person = {
//     name : 'Lee'
// };
//
// person.age =20;
//
// console.log(Object.getOwnPropertyDescriptors(person));
//
// // {
// //     name: {
// //         value: 'Lee',
// //             writable: true,
// //             enumerable: true,
// //             configurable: true
// //     },
// //     age: { value: 20, writable: true, enumerable: true, configurable: true }
// // }

//
// const increase = function(num) {
//     return ++num;
// };
//
// const decrease = function(num) {
//     return --num;
// }
//
// const predicates = {increase, decrease};
//
// function makeCounter(predicate) {
//     let num = 0;
//
//     return function() {
//         num = predicate(num);
//         return num;
//     };
// }
//
// const increaser = makeCounter(predicates.increase);
// console.log(increaser());
// console.log(increaser());
//
// const decreaser = makeCounter(predicates.decrease);
// console.log(decreaser());
// console.log(decreaser());

// function square(number){
//     return number = number;
// }
//
// console.dir(square);