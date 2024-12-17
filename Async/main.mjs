import {makeCoffe} from "./coffe.mjs" 


console.log("Saya memesan kopi di kafe ");

makeCoffe();

console.log("Pramusaji memberikan kopi pesanan.");
console.log("Saya mendapatkan kopi dan menghabiskannya.") 

// EKPETASI 

// Saya memesan kopi di kafe.
// Mohon menunggu. Pramusaji sedang membuatkan kopi dalam 5 detik.
// Pramusaji selesai membuat kopi.
// Pramusaji memberikan kopi pesanan.
// Saya mendapatkan kopi dan menghabiskannya. 



// ACTUAL 

// Saya memesan kopi di kafe~
// Mohon menunggu. pelayan sedang membuatkan kopi dalam 7 detik
// Pramusaji memberikan kopi pesanan.
// Saya mendapatkan kopi dan menghabiskannya.
// Pramusaji selesai membuat kopi. 


// mau di bikin 0 juga gak ngaruh, kenapa bisa gitu ? karena setTimeOut itu berjalan secara asinkronus 
// Untuk nyelesainnya kita bisa pake Callback dan Promise 