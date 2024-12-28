// kalo pake callback kita bisa kena Callback Hell 

// promise bekerja dengan 3 buah state ( kondisi ) 
// - Pending : kondisi awal sebuah proses berjalan. Belum ada hasil yang diharapkan. 
// - Fullfiled : kondisi keberhasilan proses dan akan mengembalikan nilai positif
// - Rejected : operasi terjadi kegagalan dan membawa alasan atau data mengenai masalah ini. Biasanya, data kegagalan berupa instance dari class Error 

function promiseExecutor(resolve,reject){ 

    let est = 5000;

    setTimeout(()=>{
        console.log("Melakukan sesuatu sebelum promise di selesaikan") 

        const number = Math.random();

        if(number > 0.5){
            resolve('You did it!!')
        } else {
            reject(new Error("Sorry, something went wrong !!"));
        } 
    },est) 
} 


function doSomething(){
    return new Promise(promiseExecutor);
}