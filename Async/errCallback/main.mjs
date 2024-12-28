import { makeCoffee, sendCoffe } from "./coffe.mjs"; 


let order = "Espresso";

console.log("1. Saya memesan kopi di kafe"); 

makeCoffee(order,(makeCoffeeError,makeCoffeeData)=>{
    if(makeCoffeeError){
        console.error(makeCoffeeError);
        return; 
    }


    sendCoffe(makeCoffeeData,(sendCoffeError,sendCoffeData)=>{
        if(sendCoffeError){
            console.error(sendCoffeError); 
        } 


        console.log(`6. Pramusaji memberikan ${sendCoffeData} pesanan.`);
        console.log(`7. Saya mendapatkan ${sendCoffeData} dan menghabiskannya.`);


    })
})