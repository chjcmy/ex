console.log("Hellow Wolrd");

var a1 = 100;
var a2 = "문자열";

console.log("a1 : %d a2 : %s", a1, a2);

console.log("a1 :", a1);

function f1() {
    console.log("a1 함수 호출");
}

var test = require("./second");

f1();
test.f2();