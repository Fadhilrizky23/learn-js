// Export terdiri dari 2 jenis 
// Default export dan named Export 


// Export sebelum deklarasi dilakukan 
export const name = "Fadhil"
export const email = "Fadhil@gmail.com"
export const age = 25

// Export setelah deklarasi 
const nama = "Rizky"
const mail = "Rizky@gmail.com"
const umur = 25; 

export {nama,mail,umur};  


// Export default saat di panggil namanya bebas apa dan gak perlu {}
export default function goodMorning(){
    console.log("Good Morning!");
}


export function sayGoodBye(){
    console.log("Good Bye");
}

