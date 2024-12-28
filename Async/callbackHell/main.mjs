import { makeCoffe,sendCoffe } from "./coffe.mjs"; 

console.log("1.saya memesan kopi di kafe"); 

makeCoffe(()=>{
    sendCoffe(()=>{
        console.log("6.saya mendapatkan kopi dr pramusaji")
        console.log("7.saya menghabiskan kopi");
        console.log("8.Pulang");
    })
})


// Harusnya sesuai urutan 