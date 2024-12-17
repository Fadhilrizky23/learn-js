// CALLBACK 

// sebuah function yang dijadikan paramter fungsi lain  

// setTimeout() selalu keluar terakhir karena JavaScript menggunakan mekanisme Event Loop 
// yang memprioritaskan eksekusi tugas-tugas sinkron (synchronous) terlebih dahulu.

import { makeCoffe, sendCoffe } from "./callbackCoffe.mjs"; 

console.log("Saya memesan kopi di kafe");


// makeCoffe(()=>{
//     console.log('Pramusaji memberikan kopi pesanan.');
//     console.log('Saya mendapatkan kopi dan menghabiskannya.');
// }); 

makeCoffe(()=>{
    sendCoffe(()=>{
        console.log('Pramusaji memberikan kopi pesanan.');
        console.log('Saya mendapatkan kopi dan menghabiskannya.');
    })
})
 


