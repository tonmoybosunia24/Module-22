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