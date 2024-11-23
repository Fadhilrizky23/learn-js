// STRING
// Tipe data Teks 

// "ini String di JS"
// 'ini String di JS'
// `ini String di JS` 

const year = new Date().getFullYear();
console.log(`Sekarang tahun ${year}`); 

// NUMBER 
// Tipe data Angka 
// Tipe data Number juga memiliki nilai spesial NaN dan Infinity 
 
const result = 50 / 0 ;
console.log(result); 


// BOOLEAN
let completed = true;
let passed = false; 
console.log(`1. ${completed} 2. ${passed}`);
 
const isGreater = 5 > 2; 
console.log(isGreater); 

let test = 0 > 10 ? "Benar" : "Salah"; 
console.log(test) 


// NULL 
// js punya null dan undefined; 

let message = null;  
console.log(message) 

// Undefined
// Dia akan muncul ketika kita membuat variabel tanpa memberi nilai 
// kita bisa ngasih juga secara explisit =undefined tapi mendingan =null aja 
let kosong; 
console.log(kosong) 