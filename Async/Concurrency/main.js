// kalau kita ada beberapa pekerjaan Async bisa di pakai Concurrency 

const promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(1);
    },2000)
}) 



// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("Ups !"))
//     },2000)
// })


const promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(3);
    },3000)
})


Promise.all([promise1,promise3])
.then((value)=>{
    console.log("Success");
    console.log(value);
})
.catch((err)=>{
    console.log("Failed");
    console.error(err);
})
