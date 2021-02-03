const numbers = [3, 4, 5, 6, 7, 8];
//general procedure
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

//map
// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result =  numbers.map(function(element){
//     return element * element;
// })


//map returns element,index,array
const result = numbers.map((element,index,array) => {
    console.log(element,index,array);
});

//simplified map(wii return all values) with array function
const result = numbers.map(x => x * x);
console.log(result);





// filter(will return matched condition)
const bigger = numbers.filter( x => x < 3);

// find(will return first matched condition)
const isThere = numbers.find(x => x > 5);
console.log(isThere);

// array.forEach(element => {
    
// });