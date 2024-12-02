// cara membuat objek pada OOP ada 2 

{
    // Constructer Function 
    // JS bkn bahasa berbasis class, cara ini di pake sebelum adanya ES6 

    function Person (name,age){
        this.name = name,
        this.age = age
    } 



    // Prototype adalah salah satu konsep fundamental dalam JavaScript yang memungkinkan pewarisan sifat dan method antar object 
    // Semua object di JavaScript memiliki properti tersembunyi bernama [[Prototype]] yang mengarah ke object prototype lain atau null.

    Person.prototype.eat = function (){
        console.log(`${this.name} is eating`) 
    } 

    // Membuat Objek Person 

    const person1 = new Person("Fadhil",25);
    const person2 = new Person("Rizky",23);     

    console.log(person1.name);
    console.log(person2.name)
}


{
    // Menggunakan ES6 

    class Orang {
        constructor(name,age){
            this.name = name;
            this.age = age; 
        }


        eat(){
            console.log(`${this.name} is eating`)
        }
    } 



    // Membuat Instance dari Orang 
    const orang1 = new Orang("Sekar",21);
    const orang2 = new Orang("Ningrum",20);

    console.log(orang1.name)
    console.log(orang1.age)
    console.log(orang2.name)
    console.log(orang2.age) 

    orang2.eat() 
} 

// Hal ini gak bikin JS jadi bahasa pemograman berbasis class, itu hanya sintax pemanis 
// Kita bisa cek dengan typeof 

class User{}
console.log(typeof User); // Function
