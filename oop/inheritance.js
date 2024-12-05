class SuperClass {} 

// SubClass adalah turunan dari kelas SuperClass 
class SubClass extends SuperClass {} 


class Smartphone {
    constructor(color,brand,model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    } 

    charging(){
        console.log(`$Charging ${this.model}`)
    }
} 



class Ios extends Smartphone {
    airDrop(){
        console.log("Ios have Behavior AirDrop");
    }
}


class Android extends Smartphone {
    splitScreen(){
        console.log("Android have behavior Split Screen")
    }
} 

const ios = new Ios("black","A","13 Pro");
const andro = new Android("Red","Galaxy",23); 

ios.charging();
ios.airDrop(); // Output: iOS have a behavior AirDrop 

andro.charging(); // Output: Charging Galaxy S21
andro.splitScreen(); // Output: Android have a Split Screen 


// Untuk cek dia beneran turunan dari class itu apa bukan
// pake instance of 

console.log(ios instanceof Smartphone); // true
console.log(andro instanceof Smartphone); // true