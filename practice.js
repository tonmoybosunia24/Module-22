// const country = "Bangladesh";
// const age = 52;
// const isindipendent = true;
// const student = {id: 121, class: 11, name: "Agun"};
// const friends = [13, 14, 11, 17, 21, 16, 15, 20];
// function add(num1, num2){
//        return num1 + num2
// }

// console.log(typeof(number));

// console.log(Array.isArray(friends))

// console.log(friends.includes(14));
// if(friends.indexOf(13) !== -1){
//        console.log("ase")
// }

// const newFriendAge = [18, 20, 22];
// const allFriends = friends.concat(newFriendAge);
// console.log(allFriends)
// const friend = [45, 86, 45, 22, 43, 75, 12, 55, 63, 92];
// const partial = friend.splice(2, 7, 17, 55, 66, 77)
// console.log(partial)
// console.log(friend)


// const names = ["abul", "babul", "cabul", "dabul", "babul", "abul", "kabul", "gabul", "cabul", "babul", "abul", "abul"]
// function removeDublicate(names){
//        let reserve = [];
//        for(let i = 0; i < names.length; i++){
//               const element = names[i];
//               // console.log(element)
//               if(reserve.includes(element) !== true){
//                      reserve.push(element);
//               }
//        }
//        return reserve;
// }
// const newName =removeDublicate(names);
// console.log(newName)


// for(i = 1; i <= 50; i++){
//        if(i % 3 == 0 && i % 5 == 0){
//               console.log("Foober")
//        }
//        else if(i % 3 == 0){
//               console.log("Foo")
//        }
//        else if(i % 5 == 0){
//               console.log("Bar")
//        }
//        else{
//               console.log(i)
//        }
// }

// function woodcalculator(chairQuantity, tableQuantity, bedquantity){
//        const chairwood = 3;
//        const tableWood = 10;
//        const bedWood = 50;

//        const chairwoodCost = chairwood * chairQuantity; 
//        const tableWoodCost = tableWood * tableQuantity;
//        const bedWoodCost = bedWood * bedquantity;
//        console.log(chairwoodCost, tableWoodCost, bedWoodCost);
//        const totalWood = chairwoodCost + tableWoodCost + bedWoodCost;
//        return totalWood
// }
// const woodCost = woodcalculator(2, 3, 1);
// console.log(woodCost)

// const phones = [
//        {name: "samsung", camera: 12, storage: "32Gb", price: 36000, color: "Silver"},
//        {name: "walton", camera: 36, storage: "128Gb", price: 30000, color: "blue"},
//        {name: "iphone", camera: 5, storage: "32Gb", price: 50000, color: "black"},
//        {name: "poco", camera: 20, storage: "64Gb", price: 15000, color: "black"},
//        {name: "realme", camera: 23, storage: "128Gb", price: 17000, color: "pink"},
// ];
// function chepestPhoneFind(phones){
//        let chepest = phones[0];
//        for(let i = 0; i < phones.length; i++){
//               const phone = phones[i];
//               if(phone.price < chepest.price ){
//                      chepest = phone;
//               }
//        }
//        return chepest;
// }
// const mySelection = chepestPhoneFind(phones);
// console.log(mySelection)

// const shoppingCard = [
//        {name: "show", price: 1200, quantity: 5},
//        {name: "shirt", price: 1000, quantity: 8},
//        {name: "pant", price: 700, quantity: 3},
//        {name: "belt", price: 200, quantity: 6}
// ];
// function totalCost(shoppingCard){
//        let reserve = 0;
//        for(let i = 0; i < shoppingCard.length; i++){
//               const product = shoppingCard[i];
//               const quantity = product.price * product.quantity
//               reserve = reserve + quantity;
//        }
//        return reserve;
// }
// const total = totalCost(shoppingCard);
// console.log(total)

// function ticketPrice(ticketQuantity){
//        const first100rate = 100;
//        const second100Rate = 90;
//        const third100Rate = 70;

//        if(ticketQuantity <= 100){
//               const first100Price = ticketQuantity * first100rate;
//               return first100Price
//        }
//        else if(ticketQuantity <= 200){
//               const first100Price = 100 * first100rate;
//               const restTicketQuantity = ticketQuantity - 100; 
//               const totalrestPrice = restTicketQuantity * second100Rate;
//               const totalSecondPrice = first100Price + totalrestPrice;
//               return totalSecondPrice;
//        }
//        else{
//               const first100Price = 100 * first100rate;
//               const second100Price = 100 * second100Rate;
//               const restthird = ticketQuantity - 200;
//               const thirdticketPrice = restthird * third100Rate;
//               const totalThird = first100Price + second100Price + thirdticketPrice;
//               return totalThird;
//        }
// }
// const price = ticketPrice(220);
// console.log(price)

// function add(num1, num2){
//        if(typeof num1 !== "number"){
//               console.log("please inper the right number")
//        }
//        return num1 + num2;
// }
// const total = add(12, 15);
// console.log(total)

// function feetToInch(feet){
//        const feets = feet * 12;
//        return feets;
// }
// const totalFeet = feetToInch(5);
// console.log(totalFeet)

// function centimeterToMiter(number){
//        const centimeter = number / 100;
//        return centimeter
// }
// const total = centimeterToMiter(5);
// console.log(total)

// function paperRequirements(quintity1, quintity2, quintity3){
//        const book1 = 100;
//        const book2 = 200;
//        const book3 = 300;
//        const firstbook = book1 * quintity1;
//        const secondBook = book2 * quintity2;
//        const thirdBook = book3 * quintity3;
//        const totalpaper = firstbook + secondBook + thirdBook;
//        return totalpaper;
// }
// const total = paperRequirements(2, 3, 4)
// console.log(total);

// const Friends = ["sajid", "mamun", "kamal", "Jubayer ibne rased", "chinku"];
// function bestFriend(Friends){
//        let reserve = Friends[0];
//        for(let i = 0; i < Friends.length; i++){
//               const friend = Friends[i];
//               if(friend.length > reserve.length){
//                      reserve = friend;
//               }
//        }
//        return reserve;
// }
// const total = bestFriend(Friends);
// console.log(total)

// const positiveNumber = [45, 87, 96, 63, -56, 74, 22];
// function onlyPositive(positiveNumber){
//        let reserve = [];
//        for(i = 0; i < positiveNumber.length; i++){
//               const posi = positiveNumber[i];
//               if(posi > 0){
//                      reserve.push(posi)
//               }
//               else{
//                      break;
//               }
//        }
//        return reserve
// }
// const positive = onlyPositive(positiveNumber);
// console.log(positive)

// const friends = [13, 15, 20, 40, 44, 60, 75, 80];
// console.log(Array.isArray(friends))
// const friends = [13, 15, 20, 40, 44, 60, 75, 80];
// const newFriendAge = [77, 44, 55, 66];
// const allFriends = friends.concat(newFriendAge);
// console.log(allFriends)
// const friend = [45, 55, 50, 43, 41, 38, 70, 60, 22];
// const partial = friend.slice(2, 5);
// console.log(partial)
// const friend = [45, 55, 50, 43, 41, 38, 70, 60, 22];
// const partial = friend.splice(2, 6);
// console.log(partial)
// console.log(friend)
// const names = ["abul", "babul", "cabul", "dabul", "babul", "abul", "kabul", "gabul", "cabul", "babul", "abul", "abul"];
// function removeDublicate(names){
//        const unique = [];
//        for(let i = 0; i < names.length; i++){
//               const name = names[i];
//               if(unique.includes(name) === false){
//                      unique.push(name);
//               }
//        }
//        return unique;
// }
// const finalNames = removeDublicate(names);
// console.log(finalNames)
// for(let i = 1; i <= 50; i++){
//        if(i % 3 === 0 && i % 5 === 0){
//               console.log("foober")
//        }
//        else if(i % 3 === 0){
//               console.log("foo")
//        }
//        else if(i % 5 === 0){
//               console.log("ber")
//        }
//        else{
//               console.log(i)
//        }
// }
// function woodcalculator(chairQuantity, tableQuantity, bedquantity){
//        const perchairwood = 3;
//        const pertableWood = 10;
//        const perbedWood = 50;
//        const chairWood = perchairwood * chairQuantity;
//        const tableWood = pertableWood * tableQuantity;
//        const bedWood = perbedWood * bedquantity;
//        console.log(chairWood, tableWood, bedWood);
//        const totalWood = chairWood + tableWood + bedWood;
//        return totalWood;
// }
// const totalWod = woodcalculator(3, 3, 1);
// console.log(totalWod)
// const phones = [
//        {name: "samsung", camera: 12, storage: "32Gb", price: 36000, color: "Silver"},
//        {name: "walton", camera: 36, storage: "128Gb", price: 30000, color: "blue"},
//        {name: "iphone", camera: 5, storage: "32Gb", price: 50000, color: "black"},
//        {name: "poco", camera: 20, storage: "64Gb", price: 15000, color: "black"},
//        {name: "realme", camera: 23, storage: "128Gb", price: 17000, color: "pink"},
// ];
// function chepestPhoneFind(phones){
//        let chepest = phones[0];
//        for(let i = 0; i < phones.length; i++){
//               const phone = phones[i];
//               if(phone.price < chepest.price){
//                      chepest = phone;
//               }
//        }
//        return chepest
// }
// const chepestPhone = chepestPhoneFind(phones);
// console.log(chepestPhone);
// const phones = [
//        {name: "samsung", camera: 12, storage: "32Gb", price: 36000, color: "Silver"},
//        {name: "walton", camera: 36, storage: "128Gb", price: 30000, color: "blue"},
//        {name: "iphone", camera: 5, storage: "32Gb", price: 50000, color: "black"},
//        {name: "poco", camera: 20, storage: "64Gb", price: 15000, color: "black"},
//        {name: "realme", camera: 23, storage: "128Gb", price: 17000, color: "pink"},
// ];
// function highestCamra(phones){
//        let highest = phones[0];
//        for(let i = 0; i < phones.length; i++){
//               let phone = phones[i];
//               if(phone.camera > highest.camera){
//                      highest = phone;
//               }
//        }
//        return highest;
// }
// const highestCamraPhone = highestCamra(phones);
// console.log(highestCamraPhone);
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
// const total = totalCost(shoppingCard);
// console.log(total)
// const shoppingCard = [
//        {name: "show", price: 1200, quantity: 5},
//        {name: "shirt", price: 1000, quantity: 4},
//        {name: "pant", price: 700, quantity: 3},
//        {name: "belt", price: 200, quantity: 6}
// ];
// function totalCost(shoppingCard){
//        let cost = 0;
//        for(let i = 0; i < shoppingCard.length; i++){
//               let product = shoppingCard[i];
//               let productquantity = product.price * product.quantity;
//               cost = cost + productquantity;
//        }
//        return cost;
// }
// const total = totalCost(shoppingCard);
// console.log(total)
// function ticketPrice(ticketQuantity){
//        const first100Price = 100;
//        const second100Price = 90;
//        const third100Rate = 70;
//        if(ticketQuantity <= 100){
//               const price1 = first100Price * ticketQuantity;
//               return price1;
//        }
//        else if(ticketQuantity > 100 && ticketQuantity <= 200){
//               const price1 = first100Price * 100;
//               const restticket = ticketQuantity - 100;
//               const restTicketPrice = restticket * second100Price;
//               const price2 = restTicketPrice + price1;
//               return price2;
//        }
//        else{
//               const price1 = first100Price * 100;
//               const second100Pric = 100 * second100Price;
//               const rest = ticketQuantity - 200;
//               const restprice = rest * third100Rate;
//               const price3 = price1 + second100Pric + restprice;
//               return price3
//        }
// }
// const prize = ticketPrice(220);
// console.log(prize)
function add(num1, num2){
       if(typeof num1 !== "number"){
              console.log("Wrong Input")
       }
       return num1 + num2;
}
const result = add(20, 15);
console.log(result)