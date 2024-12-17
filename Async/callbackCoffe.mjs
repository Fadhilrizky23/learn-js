export function makeCoffe(Callback){
    // 1000 mili = 1 detik 
    let estTime = 0; 
    setTimeout(()=>{
        console.log("Pramusaji selesai membuat kopi."); 

        Callback();
    },estTime);

    console.log(`Mohon menunggu. pelayan sedang membuatkan kopi dalam ${Math.ceil(estTime/1000)} detik`) 

} 


export function sendCoffe(Callback){
    let estTime = 2000; 

    setTimeout(()=>{
        console.log('Pramusaji sudah sampai ke meja.');
        Callback(); 
    },estTime)

    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    

 


}