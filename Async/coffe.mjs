export function makeCoffe(){
    // 1000 mili = 1 detik 
    let estTime = 1000; 

    console.log(`Mohon menunggu. pelayan sedang membuatkan kopi dalam ${Math.ceil(estTime/1000)} detik`) 


    setTimeout(()=>{
        console.log("Pramusaji selesai membuat kopi.")
    },estTime);
}