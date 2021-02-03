const time = new Date();
// console.log(time);

console.log("first");
// setTimeout executes only once
setTimeout(function(){
    console.log("second");
},4000);

// setTimeout executes itself after an interval
setInterval(() => {
    console.log("amare treat dey")
}, 2000);
console.log("third");
console.log("fourth");
console.log("fifth");