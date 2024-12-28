// coffe.mjs
export function makeCoffee(name) {
    // Membuat Promise baru yang akan menangani pembuatan kopi
    return new Promise((resolve, reject) => {
        let isSuccess = false;
        
        console.log(`Mohon menunggu, pramusaji sedang membuat minuman dalam ${Math.ceil(5000/1000)} menit`);
        
        // Penentuan berhasil atau tidak
        let angka = 1;
        if (angka > 0.3) {
            isSuccess = true;
        }
        
        // Proses sinkron untuk menentukan keberhasilan
        if(isSuccess == true){
            console.log("Pramusaji selesai membuatkan minuman")
            resolve(name)
        } else {
            reject(new Error("Gagal membuat minuman"))
        }
    });
}

export function sendCoffee(name) {
    // Membuat Promise baru yang akan menangani pengiriman kopi
    return new Promise((resolve, reject) => {
        let isSuccess = false;
        
        console.log(`Mohon menunggu, pramusaji sedang mengantar minuman`);
        
        // Penentuan keberhasilan
        const number = 1;
        if (number > 0.3) {
            isSuccess = true;
        }
        
        if(isSuccess == true){
            console.log("Pramusaji sudah sampai ke meja.")
            resolve(name)
        } else {
            reject(new Error("Gagal mengantar minuman"))
        }
    });
}
