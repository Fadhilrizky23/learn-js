import { makeCoffee,sendCoffee } from "./coffe.mjs"; 


let order = "matcha Latte"; 
console.log("saya memesan minum di kafe"); 

makeCoffee(order)
    .then((dataKopi)=>{
        // harus di return karena kalo enggak nanti undefined
        return sendCoffee(dataKopi);
    })
    .then((pesanan)=>{
        console.log(`Pramusaji memberikan ${pesanan} pesanan.`);
        console.log(`Saya mendapatkan ${pesanan} dan menghabiskannya.`);
    })
    .catch((err)=>{
        console.error(err);
        throw err;
    })


// Ini adalah Promise pertama kita
// Fungsi ini akan membuat kopi dan menghasilkan Promise
// Jika berhasil, Promise akan resolve dengan nama kopi (order)

// coffeeData adalah hasil dari Promise sebelumnya (makeCoffee)
// Kita menggunakan data tersebut untuk memanggil sendCoffee()
// PENTING: Kita me-return Promise baru dari sendCoffee()
// Ini memungkinkan chaining berlanjut ke .then() berikutnya

// pesanan adalah hasil dari Promise sebelumnya (sendCoffee)
// Di sini kita tidak return apa-apa karena ini adalah langkah terakhir
// Kita hanya menampilkan pesan ke console

