// Error

// Sepandai pandainya tupai melompat pasti jatoh juga 
{
    // Throw Error 
    // throw<objek error> 

    const error = new Error("Terjadi error nih");
    console.error(error); 

    {
        // Program input pembayaran dr pembeli 
        // Kalo duitnya kurang program kita error 

        let price = 100;
        let paid = 80; 

        if(price > paid){
            throw new Error("Duit lu Kurang !"); 
        }
    } 


    {
        // Cathcing error 

        // udah tau cari bangkitin error, sekarang belajar cara nangkepnyaa 


        // Menggunakan Try catch 
        // Try{
        //     code
        // }catch(err){
        //     error handling
        // }  

        try{
            console.log("memulai program")
            console.log("mengakhiri program")
        }catch(err){
            console.log(`kalo gak ada ${err} blok ini akan di abaikan`)
        }


        try{
            console.log("Start");
            throw new Error("ini error");
            console.log("Program selesai")
        }catch(err){
            console.log(`Terjadi error, ini di eksekusi. Errornyaa : ${err}`);
        }

    }
}