"use strict";
function add(a, b) {
    console.log(a + b);
    return a + b;
}
// add(1,2)
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
// runAfter1S(()=>{
//       console.log("hello")
// })
function isLegal(user) {
    if (user.age > 18) {
        console.log("User is 18+ op !!!");
    }
}
// isLegal({
//       name:"Leander",
//       age:21,
//       passion:"Coder"
// })
function array(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], "");
    }
}
// array(["leander","leonard","D'silva"]);
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function enums(direction) {
    if (direction === Direction.Right) {
        console.log("Boss is always right");
    }
}
enums(Direction.Left);
enums(Direction.Right);
console.log(Direction.Down);
