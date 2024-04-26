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