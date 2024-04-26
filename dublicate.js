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