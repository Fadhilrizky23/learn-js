{
    const user = {
        name : "Dicoding", 
        'last Name' : "indonesia", 
        age : 9, 
    }  
    
    const products =  { nama : "Sepatu", price : 230000 };  
    
    // Object itu punya properti 
    // dan properti punya Key : Value  
    
    console.log(products); 
    console.log(user); 
} 

{
    // Akses properti di Object 

    let test = {
        name : "Fadhil",
        "from country" : "Japan", 
        age : 24, 
    } 

    console.log(test.name);
    console.log(test["from country"]);
} 

{
    // Object Destructering  
    // mengeluarkan nilai dari properti ke dalam satuan yang lebih kecil ( variabel ) 
    // const {var1,var2} = objectnyaa  

    let test = {
        name : "Fadhil",
        country : "Japan", 
        age : 24, 
    } 


    let {name,country,age} = test; 
    console.log(name);
    console.log(country);
    console.log(age);  

    // Akses properti yang tidak ada di object akan undefined 
    console.log(test.coba); // undefined  

} 

{
    // Mengubah nilai 

    let account = {
        balance : 90000,
        debt : 100,
    } 

    account.balance = 200000; 
    let {balance, debt} = account; 

    console.log(balance);
} 

{
    // Menghapus nilai di object
    // Menggunakan operator delete 
    // bisa dengan dot delete.age atau delete["age"] 

    let user = {
        name : "Rizky",
        country : "korea", 
        age : "25" 
    } 

    delete user.age; 
    console.log(user); 

    delete user["country"];
    console.log(user)


}