
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
