export function doSomething(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("You did it!")
        },4000);
    })
}