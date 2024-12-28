// import { doSomething } from "./util.mjs";

// console.log("Star") 

// doSomething()
// .then((hasil)=>{
//     console.log(hasil);
// }) 

// console.log("End")




// Async Await harus di pake bersamaan dan cuman bisa di pake di function

import { doSomething } from "./util.mjs";


async function promiseWithAsync () { 

    // 1. Ini akan dieksekusi pertama di dalam fungsi
    console.log("star"); 

    // 2. Await akan menunggu Promise selesai
    let result = await doSomething();
    // 3. Setelah Promise selesai, hasil disimpan di result
    console.log(result) 

    // Promise yang ditunggu adalah Promise yang dikembalikan oleh fungsi doSomething(). 
    // await ini nunggu promisenya di resolve kalo udah nilainya masuk ke variabel let result 


    // 4. Baru kemudian ini dieksekusi
    console.log("End");

} 

promiseWithAsync()


