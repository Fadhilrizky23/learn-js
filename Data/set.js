// Membuat set 
// data di dalam set tidak ada yang akan duplikat, semua uniqe 

const mySet = new Set([1,2,3]); 
console.log(mySet); 

{
    // Menyimpan nilai Set 
    // Menggunakan Method add()
    const set = new Set()

    set.add(1);
    set.add(2); 

    console.log(set) 
} 

{
    const set = new Set(); 

    set.add(1);
    set.add("Apple");
    set.add(1);
    set.add("Mangga"); 

    console.log(set); 
} 

{
    // mengakses nilai set 

    const set = new Set();
    set.add(1);
    set.add(2);
    set.add(5);

    for(const numbers of set){
        console.log(numbers); 
    } 

    set.forEach((value)=>{
        console.log(value)
    })
} 

{
    // menghapus nilai set  

    const set = new Set(); 

    set.add(3);
    set.add(4);
    console.log(set);

    set.delete(3);
    console.log(set);
}





