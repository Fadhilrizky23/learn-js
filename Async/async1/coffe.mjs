export function makeCoffe(){
    const estTime = 5000;

    console.log(`Mohon menunggu, kopi anda sedang di buat dalam ${Math.ceil(estTime/1000)} detik`) 

    setTimeout(()=>{
        console.log("Pramusaji selesai membuat kopi");
    },estTime) 
} 


