const shoppingCard = [
       {name: "show", price: 1200},
       {name: "shirt", price: 1000},
       {name: "pant", price: 700},
       {name: "belt", price: 200}
];
function totalCost(shoppingCard){
       let cost = 0;
       for(let i = 0; i < shoppingCard.length; i++){
              const product = shoppingCard[i];
              cost = cost + product.price;
       }
       return cost;
}
const expence = totalCost(shoppingCard);
console.log(expence)
