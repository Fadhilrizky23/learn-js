// Dalam konteks pengembangan Apps, kita suka gagal konek ke server dll 

import { makeCoffe,sendCoffe } from "./callCoffe.mjs"; 

const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe`);

makeCoffe(order,(makeCoffeeError,makeCoffeeData)=>{
    if(makeCoffeeError){
        console.error(makeCoffeeError);
        return;
    }

    sendCoffe(makeCoffeeData,(sendCoffeeError,sendCoffeeData)=>{
        if(sendCoffeeError){
            console.error(sendCoffeeError);
            return;
        } 
    
    
        console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
        console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
    
    }) 
}) 



// Pertama, kode mendefinisikan sebuah order "Kopi Espresso"
// Kemudian memanggil fungsi makeCoffe() dengan dua argumen:

// Order "Kopi Espresso"
// Sebuah callback function


// Didalam makeCoffe():

// Akan mencetak pesan "Mohon menunggu. Pramusaji sedang membuat kopi dalam 5 detik"
// Menggunakan setTimeout() untuk mensimulasikan proses pembuatan kopi yang memakan waktu 5 detik
// Dalam simulasi ini, karena number selalu 1, maka isSuccess akan selalu true
// Setelah 5 detik, akan memanggil callback dengan parameter null (tidak ada error) dan nama kopi


// Setelah makeCoffe() selesai, akan memanggil sendCoffe():

// Meneruskan nama kopi yang sama
// Menggunakan setTimeout() untuk mensimulasikan proses pengantaran kopi selama 2 detik
// Karena number selalu 1, isSuccess akan selalu true
// Setelah 2 detik, akan memanggil callback dengan parameter null (tidak ada error) dan nama kopi


// Terakhir, mencetak pesan bahwa pesanan sudah diterima dan diminum

