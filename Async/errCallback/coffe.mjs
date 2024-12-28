export function makeCoffee(name,callback){
    const est = 5000;
    let isSuccess = false; 
    
    console.log(`2. Mohon menunggu, pramusaji sedang membuat kopi dalam ${Math.ceil(est/1000)} menit`);  


    setTimeout(()=>{
        // Penentuan berhasil apa enggak 

        let angka = 1

        if(angka > 0.3){
            isSuccess = true; 
        } 


        // karena dia defaultnya false, jadi dia kita bikin true biar errornya jalan  
        // Bisa juga isSusccess = false 


        if(!isSuccess){
            callback(new Error("Gagal membuat kopi"), null);
            return ; 
        } 

        console.log("3. Pramusaji selesai membuat kopi"); 
        callback(null,name);

    },est)
}

export function sendCoffe(name,callback){
    const est = 1000;
    let isSuccess = false; 
    
    console.log(`4. Mohon menunggu, pramusaji sedang mengantar kopi`); 

    setTimeout(()=>{
        // penentuan 
        const number = 0

        if(number > 0.3){
            isSuccess = true; 
        } 


        if(isSuccess == false){
            callback(new Error("Gagal mengantar kopi"),null);
        } 

        console.log('5. Pramusaji sudah sampai ke meja.');
        callback(null,name);

    },est)
}
