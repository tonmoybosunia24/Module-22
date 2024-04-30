// Problem 01

// function cubeNumber(number){
//        if(typeof number !== "number"){    
//               return "please input a valid number";
//        }
//        else{
//               const cuber = Math.pow(number, 3);
//               return cuber;
//        }
       
// }
// const cube = cubeNumber("rohim");
// console.log(cube);

// Problem 02

// function matchFinder(input1, input2){
//        if(typeof input1 !== "string" || typeof input2 !== "string"){
//               return "Plese Submit A Valid Input"
//        }
//        else if(input1.includes(input2) === true){
//               return true;
//        }
//        else{
//               return false;
//        }
// }
// const finder = matchFinder("shamim", "shx");
// console.log(finder);

// problem 3

// const input = [6, 7];
// function sortMaker(input) {
//     let num1 = input[0];
//     let num2 = input[1];
//     if(num1 < 0 || num2 < 0){
//        return "Invalid Input"
//     }
//     else if(num1 == num2){
//        return "equal"
//     }
//     else if (num1 < num2) {
//         let temp = num1;
//         num1 = num2;
//         num2 = temp;
//         return [num1, temp]
//     }
//     return input;
// }

// const output = sortMaker(input);
// console.log(output); 

// Problem 04

// const address = [
//        {street: 10, house: "16A", socity: "Earth Perfect"}
// ];
// function obj(address){
//        for(let i = 0; i < address.length; i++){
//               const add = address[i];
//               let num1 = add.street + ",";
//               let num2 = add.house + ",";
//               let num3 = add.socity;
//               if(add.street == undefined){
//                      const total = "__" + num2 + num3;
//                      return total;
//               }
//               else if(add.house == undefined){
//                      const total = num1 + "__" + num3;
//                      return total;
//               }
//               else if(add.socity == undefined){
//                      const total = num1 + num2 + "__";
//                      return total;
//               }
//               else{
//                      const total = num1  + num2 + num3;
//                      return total;
//               }
//        }
// }
// const finalAddress = obj(address);
// console.log(finalAddress)
   
// problem 5

// const chargearray = [1, 5, 2, 1];
// const totalDue = 10;
// function canPay(chargearray, totalDue){
//        if(chargearray.length === 0){
//               return "Please Input A Valid Array";
//        }
//        let totalarray = 0;
//        for(let i = 0; i < chargearray.length; i++){
//               const arrayelement = chargearray[i];
//               totalarray =  totalarray + arrayelement;
//        }
//        if(totalarray >= totalDue){
//               return true;
//        }
//        else{
//               return false;
//        }
              
// }
// const inpay = canPay(chargearray, totalDue);
// console.log(inpay)
