{
    // LOOPING

    {
        // Looping
    
        const foods = ["Nasi goreng","Pasta","sate"]; 
    
        console.log(foods[0]);
        console.log(foods[1]);
        console.log(foods[2]);
    } 
    
    {
        // For loop 
    
        // for(variabel awal;test kondisi;increment){// do something }  
    
        let arr = [1,2,3,4,5,6,7,8,9,10]; 
    
        for(let i = 0; i < arr.length; i++){
            console.log(`element ke ${i+1} index ke ${i}`);
        } 
    
    } 
    
    {
        // for in 
        // for in digunakan pengulangan pada object 
        // bahkan dapat melakukan iterasi ke properti innheritance dari object seperti length 
    
        let obj = {
            firstName : "fadhil",
            lastName : "Rizky",
            country : "indonesia",
            team : "Dicoding", 
        }
    
        for (const key in obj) {
            console.log(`${key} : ${obj[key]}`);
            }
    } 
    
    {
        // For of 
        // For of muncul pada ES6, berbeda dengan for in
        // for of lebih sederhana karena tidak perlu memikirkan property dan key 
        // for of hanya dapat digunakan pada object yang bisa di iterasi seperti array,string,set, dan map 
    
        let arr = [1,2,3,4,5];
        let obj = {firstName : "fadhil",lastName : "rizky"} 
    
        for (let item of arr){
            console.log(item);
        }
    
        // for ( const data of obj){
        //     console.log(data);
        // }
    } 
    
    
    {
        // While 
        // while(condition){steatment} 
    
        let i = 0; 
    
        while(i <= 5){
            console.log(i);
            i++; 
        }
    
    } 
    
    {
        // do While 
        // do{
        //     something
        // }while() 
    
        // Blok di dalam do setidaknya dilakukan 1x  
    
        let klik = false; 
    
        do{
            console.log("menu : ");
        }while(klik);
    } 
    
} 

{
    // CONTROL STEATMENT 

    {
        // Break 
        // Kita ngasih tau buat stop dan langsung selesai perulangannya 

        for(let i=1;i<10;i++){
           
            if(i === 5){
                break;
            } 

            console.log(i)
        } 

        // di switch case juga jangan lupa pake break 
    }
}