//slice(shows a part from the array)
const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2, 5);
console.log(part);

//splice(removes (from, how many, inject(add)))
const removed = nums.splice(2,3, 77);
console.log(removed);
console.log(nums);

// join(adds "ami" with each element)
const together = nums.join("ami")
console.log(together);