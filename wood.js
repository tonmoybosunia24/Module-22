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
