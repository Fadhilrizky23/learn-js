// Spread Operator 

// Spread digunakan untuk menyebarkan nilai pada objek dan array
// di tandai dengan ...  

{
    // OBJ 
    {
        // Menggabungkan 2 objek 
    
    
        let obj1 = {name : "dicoding"}; 
        let obj2 = {country : "indonesia"}; 
        let newObj = {...obj1,...obj2} 
    
        console.log(newObj); 
    } 
    
    {
        // Menyalin 2 Objek 
    
        const obj = {"firstName" : "Fadhil", "lastName" : "Rizky"}; 
        const objCopy = {...obj};
    
        console.log(objCopy);
    } 
    
} 
{
    // ARRAY 
    {
        // gabung 2 Array 
        const array1 = ["indonesia"]; 
        const array2 = ["Dicoding"]; 
        const gabung = [...array1,...array2];

        console.log(gabung);
    } 

    {
        // copy 
        const array = [1,2,3,4,5]; 
        const copy = [...array];

        console.log(copy);
    }
}
