import { makeCoffee } from "./coffe.mjs"; 

console.log("Saya memesan kopi di Caffe"); 

makeCoffee(()=>{
    console.log('Pramusaji memberikan kopi pesanan.');
    console.log('Saya mendapatkan kopi dan menghabiskannya.');
})