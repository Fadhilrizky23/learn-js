{
    console.log("star");

    setTimeout(()=>console.log("Timeout 0ms"),0); 

    console.log("Stop"); 

    // Harusnyaa 
    // Star
    // Timeout 0ms 
    // Stop 

    // AKTUAL NYAA 
    // Star 
    // Stop 
    // Timeout 0ms  

    // Kenapa begitu ? 
    // JavaScript adalah bahasa single-thread dengan event loop:
    // JavaScript mengeksekusi kode secara berurutan (single-threaded), tetapi memiliki mekanisme event loop yang memungkinkannya menangani operasi asynchronous. Ini berarti meskipun sebuah fungsi memiliki waktu tunggu 0ms, ia masih akan dipindahkan ke task queue dan baru dieksekusi setelah call stack kosong. 

    // DAN YANG DI KERJAIN DULUAN DI CALL STACK ADALAH PROSES SINKRONUS 
}