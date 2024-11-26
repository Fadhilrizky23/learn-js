// Map ini seperti Object 
// sama sama punya key value 
// Dia menutupi kekurangan Object, Key pada map bisa menggunakan tipe data apa saja, kalo object cuman bisa string 

{
    // Membuat Map 

    const map = new Map(); 

    const productMap = new Map([
        ['shoes',500],
        ['cap',350],
        ['jeans',200],
    ]);  

    console.log(productMap);
} 

{
    // Menyimpan nilai di Map 
    // Menggunakan Metode Set 
    const map = new Map(); 
    map.set('name','aras');
    console.log(map);   
} 

{
    // Akses Nilai Map 
    // Menggunakan Method Get 

    let map = new Map(); 
    map.set(1,10000); 
    console.log(map.get(1));
} 

{
    // Menghapus nilai Map 
    // Menggunakan Method delete
    // map.delete(key) 

    let map = new Map(); 
    map.set(1,"apel");
    map.set(2,"jeruk");
    console.log(map) 

    map.delete(1);
    console.log(map) 

    
}

