// kita tau di OOP bisa mewariskan properthy dan method ke sub class nya 
// kayak kita mau ubah perilaku 

// OVERRIDING 

{
    // Overriding Consturcter 

    class Smartphone {
        constructor(color,brand,model){
            this.color = color;
            this.brand = brand;
            this.model = model;z
        }

        charging(){
            console.log(`Charging ${this.model}`)
        }
    } 

    class Android extends Smartphone {
        constructor(color,brand,model,device){
            // kalo ini gak ada dia akan "Must call super constructor in derived class before accessing 'this' or returning from derived constructor"
            super(color,brand,model)
            this.device = device;
        }

        splitScreen(){
            console.log("Android have Split Screen");
        }
    } 


    const newAndro = new Android("Black","Samsung","Galaxy","TV");
    console.log(newAndro.device);
}

{
    // OVERIDING Method 
    // Misal android sudah mendukung Fast charging 
    // Caranya adalah dengan ketik lagi method yang ingin kita override  

    class Bank { 

        #password = 191202;

        constructor(id,password){
            this.id = id;
            this.#password = password; 
        } 


        limit(){
            console.log(`Limit 1000000`); 
        } 
    } 

    class Mandiri extends Bank {
        constructor(id,password,bates){
            super(id,password);
            this.bates = bates
        }


        // Overiding Method 

        limit(){
            console.log(`Limit di mandiri adalah ${this.bates}`);
        }
    } 

    let bank = new Mandiri(23,191202,50000000);
    console.log(bank.id)
    bank.limit();
}