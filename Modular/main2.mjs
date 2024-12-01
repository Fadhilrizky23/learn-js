// Pengunaan as itu penting
// kalo kita punya 2 method yang sama
// di 2 file yang berbeda 

import { myFunction as userFunction} from "./user.mjs";
import { myFunction as customerFunction} from "./customer.mjs";  


userFunction();
customerFunction();