let NyuciBaju = new Promise((resolve,reject)=>{
    try {
        resolve("Nyuci selesai")
    } catch (err) {
        reject(new Error("Nyuci baju gak selesai"))
        console.error(err)
    }
}) 


let nyapuLantai = new Promise((resolve,reject)=>{
    try {
        resolve("Nyuci baju selesai");
    } catch (err) {
        reject(new Error("Nyapu gak selesai"))
        console.error(err)
    }
})


let bikinKopi = new Promise((resolve,reject)=>{
    try {
        resolve("Bikin kopi selesai")
    } catch (err) {
        reject(new Error("Kopi gak selesai"));
        console.error(err)
    }
}) 


Promise.all([NyuciBaju,nyapuLantai,bikinKopi])
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.error(error)
})