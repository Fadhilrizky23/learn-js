{
    // Konversi Explisit 

    {
        // TO STRING 
        // Menunggakan String() .toString() 

        const number = 123; 
        const boolean = true; 

        const strNumber = String(number);
        const strBoolean = boolean.toString() 

        console.log(strNumber);
        console.log(strBoolean); 

    } 

    {
        // TO NUMBER 
        // Menggunakan Number() 

        const strNumber = '123';
        const strFloat = '123.345';
        const strBool = true; 

        const numFromString = Number(strNumber);
        const floatFromString = Number(strFloat);
        const boolFromString = Number(strBool); 

        console.log(numFromString); // 123 
        console.log(floatFromString); // 123.345
        console.log(boolFromString); // di Num Bool itu 0 atau 1  
        
        const cm = "20.55 cm"; 
        const px = "12.45 px";

        const floatFromCm = parseFloat(cm);
        const floatFromPx = parseFloat(px);

        console.log(floatFromCm)
        console.log(floatFromPx)
    } 

    {
        // TO BOOLEAN 
        // Menggunakan Boolean()

        const number = 123; 
        const string = "Dicoding"
        const empty = null; 

        const boolFromNumber = Boolean(number);
        const boolFromString = Boolean(string);
        const boolFromEmpty = Boolean(empty); 

        console.log(boolFromNumber); // true
        console.log(boolFromString); // true
        console.log(boolFromEmpty); // false  

        // Liat lagi Truthy Falsy di JS, karena Boolean cuman menerima 2 True dan False 
        // Falsy : 
        // false
        // 0
        // -0
        // 0n
        // ''
        // null
        // undefined
        // NaN
    }

} 

{
    // KONVERSI IMPLISIT 
    // konversi yang di lakukan oleh programmernya 

    const age = 20; 
    const massage = "umurku " + age; 
    
    console.log(massage);
}