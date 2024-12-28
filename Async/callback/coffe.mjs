export function makeCoffee(callback){
    let estTime = 5000;

    console.log(`Mohon menunggu, Pramusaji sedang membuat kopi dalam ${Math.ceil(estTime/1000)} detik`); 


    setTimeout(()=>{
        console.log("Pramusaji selesai membuat kopi"); 

        callback(); 
    },estTime)
}