import {name,favoriteFoods} from "./module.mjs"
import {nama,test as coba} from "./module.mjs"

// kalo mau semua yang di import bisa pake * 
import *as user from "./manyMethod.mjs" 

console.log(name)
console.log(favoriteFoods) 


console.log(nama)
coba(name) 


user.satu()
user.dua()
user.tiga()