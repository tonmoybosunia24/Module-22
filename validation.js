function add(num1, num2){
       // let check = parseInt(num1)
       if(typeof num1 !== "Number"){
              console.log("Wrong Input")
       }
       return num1 + num2;
}
const result = add("20", 15)
console.log(result)