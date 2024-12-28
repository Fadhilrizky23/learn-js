export function makeCoffe(callback){
    let time = 7000; 

    console.log(`2. Kopi sedang dibuatkan dalam waktu ${Math.ceil(time/1000)} detik`) 

    setTimeout(()=>{
        console.log("3. Kopi sudah selesai dibuatkan")

        callback(); // ini manggil sendCoffee
    },time)
} 


export function sendCoffe(callback){

    let time = 3000;

    console.log("4.Kopi sedang di antar ke meja ")

    setTimeout(()=>{
        console.log("5.Pramusaji sampai di meja");

        callback(); // manggil callback di main.mjs
    },time)
    
}