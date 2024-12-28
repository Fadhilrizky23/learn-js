console.log("Star");

setTimeout(()=>{
    console.log("Async")
},0) 

console.log("Stop") 

// karena ini adalah behavior dari JS dimana dia Non blocking 
// Jadi star di masukan di call stack 
// Async di masukan ke Queue stack 
// lalu Stop di call stack 

// Saat call stack sudah selesai di jalankan, baru Queue stacknya di eksekusi  