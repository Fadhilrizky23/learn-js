// Function programming 
// denga FP kita bisa menghasilakan kode yang lebih deklaratif 

{
    // Contoh kode imperatif 
    // imperatif - untuk mencapai suatu tujuan kita perlu menulis langkah langkah nya 
    // Gaya imperatif memang fokusnya pada “how to solve”, bukan “what to solve”. 

    let arr1 = ['Harry', 'Ron', 'Jeff', 'Thomas']; 

    let arr2 = []

    for(let i =0;i<arr1.length;i++){
        arr2.push(arr1[i]);
    }

    console.log(arr2) 

} 

{
    // Menyelesaikan masalah yang sama dengan metode Deklaratif 

    let arr1 = [1,2,3,4,5];

    let arr2 = arr1.map((value)=>{
        `${value}`
    })

    console.log(arr1)


} 