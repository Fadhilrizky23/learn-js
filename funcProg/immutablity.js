// Benefit dari menggunakan pure Function adalah datanya gak ber ubah ubah 
// bahwa segala yang sudah dibuat, tidak bisa diubah nilainya. Konsep ini disebut sebagai immutability 
// Tujuannya adalah memastikan sebuah nilai tidak dapat diubah dengan mudah (atau bahkan tidak bisa). 
// Tujuannya tentu untuk menghindari segala perubahan yang tidak terduga dan biasanya menjadi akar permasalahan, seperti bug. 


// Intinya kita harus pake sistem copy jadi gak ngubah data aslinya 

// {

//     // TANPA PURE FUNCTION 

//     function max(arrayOfNumbers){
//         return arrayOfNumbers
//         .sort((a,b)=> a - b)
//         .pop(); 
//     }
    
    
//     const numbers = [10, 23, 24, 7, 42, 18];
//     const largestNum = max(numbers);
    
//     console.log(largestNum); 
//     console.log(numbers);
    
    
    
//     function regisEmail(person,email){
//         return Object.assign(person, {email}); 
//     } 
    
    
//     const person = {
//         name : "fadhil",
//         username : "zephyr"
//     } 
    
//     let  personWithEmail = regisEmail(person,"fadhil@rizky01");
    
//     console.log(person); // { name: 'fadhil', username: 'zephyr', email: 'fadhil@rizky01' } jadi ada emailnya 
//     console.log(personWithEmail) 
    
// } 

{
    // DENGAN PURE FUNCTION 

    function max(arr){
        return [...arr]
        .sort((a,b)=>a-b)
        .pop(); 
    } 


    let arrayData = [90,762,5,5,1,66];

    console.log(max(arrayData)); // 762 
    console.log(arrayData); // [ 90, 762, 5, 5, 1, 66 ] dia tetep karena yang keluar cuman copy an nyaa  


    function registerEmail(person,mail){
        // ini bikin objek baru apa Destruct 
        return { ...person, mail } 
    } 

    const person = {
        name : "fadhil",
        username : "zephyr"
    }  

    console.log(person)
    console.log(registerEmail(person,"Dicoding@gmail")); 
    console.log(person)
} 



// IMMUTABLE 
{ 
    // ARRAY 
    {
        // Array MAP 

        // Array map bawaan dari array 
        // Menerima 1 buah callback function 
    
        let data = [1,2,3,4,5,6]; 
    
        // .map(value,index)
        let newData = data.map((value,index)=>{
           return `${value}`
        }) 
    
        console.log(newData);
    
    } 


    {
        // Array Filter 

        // Fungsi bawaan seperti map untuk menyaring nilai array yang ada 
        // Callback function harus mengambalikan Boolean 

        // contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai false pada array sebagai berikut.
        const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 14]
        .filter((item) => Boolean(item))

        console.log(truthyArray); 


        const data = [1,2,3,4,5,6,7,8,9,10]

        let filter = data.filter((value) => value % 2 == 0);

        console.log(filter); 


        const students = [
            {
              name: 'Harry',
              score: 60,
            },
            {
              name: 'James',
              score: 88,
            },
            {
              name: 'Ron',
              score: 90,
            },
            {
              name: 'Bethy',
              score: 75,
            }
          ];

        let juara1 = students.filter((nilai)=> nilai.score >= 90);

        console.log(juara1);

    } 

    {
        // Array Reduce 

        // Array.reduce digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja
        // array.reduce(callback(accumualtor,currentValue,[currentIndex],[array]),initialValue); 

        // accumulator: Variabel yang menyimpan hasil akumulasi/transformasi
        // currentValue: Elemen array yang sedang diproses
        // currentIndex: Posisi elemen saat ini dalam array
        // array: Array asal yang sedang di-reduce
        // initialValue: Nilai awal dari accumulator (opsional)

        const numbers = [1,2,3,4,5,6,7,8,9,10];

        const sum = numbers.reduce((total,value)=>{
            return total += value;
        },0) 

        console.log(sum);


        const data = [1,2,3,4,5,6,7,8,9,10];

        let totalGenap = data.reduce((total,value)=>{
            if(value % 2 == 0){
                return total += value
            } else {
                return total;
            }
            
            // return total; // harus di kasih ini biar gak undefined pas ganjil;
        },0) 


        console.log(totalGenap);
    } 
} 

{
    // ImmutAble Object 

    // Bisa pake Object.freeze untuk bekuin objek biar gak bisa di otak atik

    const user = {
        name : "fadhil",
        email : "fadhil@dicoding.com"
    } 

    Object.freeze(user);


    user.email = "test@dicoding.com"; // dia gak akan ke ganti ini
    console.log(user); 

    // perlu diingat bahwa Object.freeze hanya membekukan tingkat pertama dari objek. Jika objek tersebut memiliki properti yang merupakan objek lain
}

