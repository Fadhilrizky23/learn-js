// Mengekspor variabel 

export const name = "Fadhil"; 

// Export variabel bertipe array 

export const favoriteFoods = ["Pizza","pasta","sushi"]; 


// Export function 
export function sayHi(name){
    console.log(`Hi ${name}`);
}


// kita bisa export di akhir 
let nama = "Rizky";
function test(name){
    console.log(`Test ${name}`)
} 
export {nama,test}

