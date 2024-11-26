const array = [1,2]; 
console.log(typeof array);  

{ 
    // Membuat Array 
    {
        // Object Contructer 
    
    
        const users = new Array(); 
        const numbers = new Array(5); 
    
        console.log(users); // [] array kosong  
        console.log(numbers);
            
    } 
    
    {
        // Array.from 
        const foo = Array.from("foo");
        console.log(foo); // ["f","o","o"]; 
    
        // Array from juga bisa digunakan untuk menyalin array 
        const users = new Array("John","jane","jack","jill"); 
        const customer = Array.from(users); 
    
        console.log(customer); 
    } 
    
    {
        // Array Literal 
        // cara yang paling mudah dan simpel 
    
        const array = [];
        const fruits = ['Apple', 'Banana', "Cherry", "", "Grape"]; 
    
        console.log(fruits); 
    } 
}


{
    // Akses element Array  
    // Menggunakan index array[index] 
    // index dimulai dari angka 0 
    // element di mulai dari 1 

    const myArray = [45,30,22]; 
    console.log(myArray[1]); // 30 

} 

{
    // Manipulasi Array 
    // Ada 2 cara yaitu dengan indexing dan method push 


    // Indexing 
    const array = [1,2,3,4,5]; 
    array[1] = 10; 
    console.log(array); 

    // Menggunaka PUSH 
    // Menambhkan data di element terakhir 
    let myArray = [1,2,3,4,5]; 
    myArray.push(6); 
    console.log(myArray);

} 



{
    // Menghapus Element dan data Array
    {
      
        // Menggunakan keyword delete 
    
        const myArray = ["Android", "data Science", "Web"]; 
    
        delete myArray[1]; 
        console.log(myArray); // data science akan tetap di hapus tapi tidak bikin web maju ke element ke 2 ( data sudah terhapus tapi element belum) 
    } 
    {
        // Splice
        // Menghapus data dan Element pada Array 
        const array2 = ["Android","Fluter","Golang","Javascript"];
        array2.splice(1,2); // menghapus index ke 1 sebanyak 2 data ke belakang ( berarti index 1 dan 2 )

        console.log(array2); 
    } 

    {
        // Shift dan Pop 
        // Shift hanya menghapus element pertama
        // Pop hanya menghapus element terakhir 
        // Kekurangan nya di banding delete dan splice adalah tidak fleksibel  

        const myArray = ['Android', 'Data Science', 'Web']; 
        myArray.shift();
        console.log(myArray); 

        const myArray2 = ['Android', 'Data Science', 'Web']; 
        myArray2.pop(); 
        console.log(myArray2);
    } 

    
} 

{
    // Array Desctructering 
    // Destruct digunakan untuk melihat isi array 
    // mirip seperti destruct di Object bedanya ini pake [] 

    const intro = ["Hello", "Sekar"]; 
    let [ greeting , name] = intro; 

    console.log(greeting);
    console.log(name); 
} 

{
    // Array Method  

    {
        // Reverse 
        const myArray = ['Android', 'Data Science', 'Web']; 

        myArray.reverse(); 

        console.log(myArray);
    } 

    {
        // Sort  
        // Secara default dia akan ngurutin berdasarkan abdjad / dari kecil ke besar 

        const myArray = ['Web', 'Android', 'Data Science']; 
        myArray.sort(); 
        console.log(myArray); 

        let data = [9,6,7,3,2,4,0,1,5,8 ];
        data.sort();
        console.log(data);

        
    }
}