// add n number of elements
function add(num1, num2){
    console.log([...arguments]);
    sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum =  sum + element;
    }
    return sum;
}
const result = add(2, 3, 5, 7, 3, 2);
console.log(result);