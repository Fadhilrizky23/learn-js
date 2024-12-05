// // Property dan Method 

// class CoffeMachine {
//     constructor(waterAmount){
//         this.waterAmount = waterAmount;
//         this._temperature = 90; 
//     } 

//     set temperature(temperature){
//         console.log("youre not allowed")
//     }

//     get temperature(){
//         return this._temperature;
//     }


//     makeCoffe(){
//         console.log(`Membuat kopi dengan suhu ${this.temperature}`)
//     } 


// }  



// let kopi = new CoffeMachine(100);
// console.log(`Sebelum di ubah = ${kopi.temperature}`)
// kopi.temperature = 60;
// console.log(`setelah di ubah = ${kopi.temperature}`)

// // kopi.makeCoffe();  


// Kalo kita pake this.name dia tidak akan langsung akses ke property nya tapi ke getter name
// this._name langsung mengakses atribut internal _name tanpa melalui getter, karena _name dianggap sebagai properti biasa. 

class Person {
    constructor(name,country,age){
        this._name = name; // kalo gak pake _ dia looping
        this.country = country;
        this.age = age;     
    } 

    get name(){
        return this._name;
    }

    set name(value){
        if(typeof value !== "string"){
            throw new Error("name must be String!!!")
        }
        
        this._name = value;
    }
} 



const person = new Person("Fadhil","indonesia",25);
console.log(person.name) 


class User { 
    // Private field harus di deklarasi 
    #password;


    constructor(email){
        this.email = email;
        this.#password = this.#defaultPassword();
    } 


    // Kalo mau user.password gak bisa di akses
    // ini harus di ilangin
    get password (){
        return this.#password; 
    }


    // Set harus ada minimal 1 Paramter
    set password(value){
        
        throw new Error(`Gak bisa ganti password, hanya sesuai defaultnya = ${this.#defaultPassword()}`);
    }

    #defaultPassword(){
        return 12345;
    } 
}

let user = new User("fadhilrizky231@gmail.com");
console.log(user.email)
console.log(user.password)
// user.password = 1234;





