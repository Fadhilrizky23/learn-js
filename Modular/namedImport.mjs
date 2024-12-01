import {satu,dua,name,country,age,tiga} from "./manyMethod.mjs"


// kalo banyak bisa pake 
import * as variabels from "./manyMethod.mjs" 

console.log(variabels.age)


satu();
satu();
dua();
dua();

// di export pake export {tiga}
tiga();

console.log(name)
console.log(country)
console.log(age)


