const country = "Bangladesh";
const age = 52;
const isindipendent = true;
const student = {id: 121, class: 11, name: "Agun"};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
       return num1 + num2
}
console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isindipendent));
console.log(typeof(student));
console.log(Array.isArray(friends));
console.log(typeof(add));


console.log(friends.includes(21))
if(friends.indexOf(4654) != -1){
       console.log("ase")
}
else{
       console.log("nai")
}

// Concat

const newFriendAge = [12, 13, 11, 14];
const allFriends = newFriendAge.concat(friends) /* একটা এ্যরে এর সাথে আরেকটা এ্যারে কে জোড় লাগানো। */
console.log(allFriends)