//double equal will try to convert(wont check type) and compare
const first = 1;
const second = "1";
if(first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}


//triple equal will directly compare(will check type)
const first = 1;
const second = "1";
if(first === second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}


// will be true
const first = 0;
const second = false;
if(first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}


// will be false
const first = 0;
const second = false;
if(first === second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}