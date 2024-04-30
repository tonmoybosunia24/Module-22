// Array.js


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


// Slice.js


// const friend = [45, 86, 45, 22, 43, 75, 12, 55, 63, 92];
// const partial = friend.slice(2, 7);
// console.log(partial);
// console.log(friend)


// Splice.js


const friend = [45, 86, 45, 22, 43, 75, 12, 55, 63, 92];
const partial = friend.splice(2, 5, 1, 2, 3); /* অরজিনাল এ্যারে থেকে কিছু এলিমেন্ট কে সরানোর জন্য। */
console.log(partial)
console.log(friend)


// Dublicate.js


const names = ["abul", "babul", "cabul", "dabul", "babul", "abul", "kabul", "gabul", "cabul", "babul", "abul", "abul"]

function removeDublicate(names){
       const unique = [];
       for(let i = 0; i < names.length; i++){
              const name = names[i];
              if(unique.includes(name) === false){
                     unique.push(name)
              }
       }
       return unique;
}
const uniquename = removeDublicate(names);
console.log(uniquename);


// Devicible.js


for(let i = 1; i <= 50; i++){
       if(i % 3 === 0 && i % 5 === 0){
              console.log("Foober")
       }
       else if(i % 3 === 0){
              console.log("foo")
       }
       else if(i % 5 === 0){
              console.log("bar")
       }
       else{
              console.log(i)
       }
       
}


// Wood.js


function woodcalculato(chairQuantity, tableQuantity, bedquantity){
       const perChairwood = 3;
       const perTablewood = 10;
       const perBedwood = 50;

       const chairWood = perChairwood * chairQuantity;
       const tableWood = perTablewood * tableQuantity;
       const bedWood = perBedwood * bedquantity;
       console.log(chairQuantity, tableQuantity, bedquantity)

       const tatalWood = chairWood + tableWood + bedWood;
       return tatalWood;
}
const totalWood = woodcalculato(0, 3, 0);
console.log(totalWood , "Cft")


// Cheapest.js


// function chepestPhone(phones){
//        let chepest = phones[0];
//        for(let i = 0; i < phones.length; i++){
//               const phone = phones[i];
//               if(phone.price < chepest.price){
//                      chepest = phone;
//               }
//        }
//        return chepest;
// }
// const mySelection = chepestPhone(phones);
// console.log(mySelection)
const phones = [
       {name: "samsung", camera: 12, storage: "32Gb", price: 36000, color: "Silver"},
       {name: "walton", camera: 36, storage: "128Gb", price: 30000, color: "blue"},
       {name: "iphone", camera: 5, storage: "32Gb", price: 50000, color: "black"},
       {name: "poco", camera: 20, storage: "64Gb", price: 15000, color: "black"},
       {name: "realme", camera: 23, storage: "128Gb", price: 17000, color: "pink"},
];
function highestCamra(phones){
       let highestCamra = phones[0];
       for(let i = 0; i < phones.length; i++){
              const phone = phones[i];
              if(phone.camera > highestCamra.camera){
                     highestCamra = phone;
              }
       }
       return highestCamra;
}
const mySelection = highestCamra(phones);
console.log(mySelection);


// Simple-Shopping-Card


// const shoppingCard = [
//        {name: "show", price: 1200},
//        {name: "shirt", price: 1000},
//        {name: "pant", price: 700},
//        {name: "belt", price: 200}
// ];
// function totalCost(shoppingCard){
//        let cost = 0;
//        for(let i = 0; i < shoppingCard.length; i++){
//               const product = shoppingCard[i];
//               cost = cost + product.price;
//        }
//        return cost;
// }
// const expence = totalCost(shoppingCard);
// console.log(expence)


// Quantity-Card.js


const shoppingCard = [
       {name: "show", price: 1200, quantity: 5},
       {name: "shirt", price: 1000, quantity: 4},
       {name: "pant", price: 700, quantity: 3},
       {name: "belt", price: 200, quantity: 6}
];
function totalCost(shoppingCard){
       let cost = 0;
       for(let i = 0; i < shoppingCard.length; i++){
              const product = shoppingCard[i];
              const productQuantity = product.price * product.quantity;
              cost = cost + productQuantity;
       }
       return cost;
}
const expence = totalCost(shoppingCard);
console.log(expence)


// Discount.js


function ticketPrice(ticketQuantity){
       const first100Rate = 100;
       const second100Rate = 90;
       const third100Rate = 70;
       if(ticketQuantity <= 100){
              const price = ticketQuantity * first100Rate;
              return price;
       }
       else if(ticketQuantity <= 200){
              const first100Rat = 100 * first100Rate;
              const restTicketQuantity = ticketQuantity - 100;
              const restTicketPrice = restTicketQuantity * second100Rate;
              const totalPrice = first100Rat + restTicketPrice
              return totalPrice;
       }
       else{
              const first100Price = 100 * first100Rate;
              const second100Price = 100 * second100Rate;
              const restTicketQuantit = ticketQuantity - 200;
              const restTicketPri = restTicketQuantit * third100Rate;
              const totalPri = first100Price + second100Price + restTicketPri;
              return totalPri;
       }
}
const price = ticketPrice(220);
console.log(price);


// Validation.js


function add(num1, num2){
       // let check = parseInt(num1)
       if(typeof num1 !== "Number"){
              console.log("Wrong Input")
       }
       return num1 + num2;
}
const result = add("20", 15)
console.log(result)