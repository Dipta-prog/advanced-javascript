let bonus = 20;

//
function sum(first, second){
    //block scope(let, const)
    let result = first + second + bonus;
    //console.log(bonus);
    if(result > 9){
        //global variable(var)
        var mood = "happy";
        mood = "fishy";
        mood = 'funky';
        mood = "cranky"
        //console.log(mood);
    }
    console.log(day);
    let day = "friday";
    
    return result;
}

const output = sum(3, 7);

// access outer scope variable
console.log(bonus);
//console.log(output);

// dev js dude website