export function makeCoffe(name,callback){
    let est = 5000;
    let isSuccess = false; 

    console.log(`Mohon menunggu. Pramusaji sedang membuat kopi dalam ${Math.ceil(est/1000)} detik`); 

    setTimeout(()=>{
        // penentuan hasil asinkronus ( CUMAN SIMULASI )
        // const number = Math.random();
        const number = 1;

        if(number > 0.3){
            isSuccess = true;
        } 


        if(!isSuccess){
            callback(new Error("Gagal membuatkan kopi"),null);
            return 
        }

        console.log("Pramusaji selesai membuat kopi");
        callback(null,name);
    },est); 
} 





export function sendCoffe(name,callback){
    const est = 2000;
    let isSuccess = false; 

    console.log('Pramusaji sedang mengantarkan kopi pesanan'); 

    setTimeout(()=>{
        // const number = Math.random();
        const number = 1;

        if(number > 0.3){
            isSuccess = true;
        } 

        if(!isSuccess){
            callback(new Error("Gagal mengantarkan Kopi"),null)
            return;
        } 

        console.log('Pramusaji sudah sampai ke meja.');
        callback(null,name);
    },est);
}