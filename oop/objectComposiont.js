// Anda sedang mengembangkan sebuah video game. Video game tersebut memiliki banyak karakter seperti monster, wizard dan guardian 
// Tiap karakter ada skill masing masing  

class Character {
    constructor(name,healt,position){
        this.name = name;
        this.healt = healt;
        this.position = position
    } 

    canMove(){
        console.log(`${this.name} moves to ${this.position}`);
    }
} 


class Monster extends Character { 
    canAttack(){
        console.log(`${this.name} attacks with a weapon!`)
    }
}

class Guardian extends Character {
    canDefend() {
        console.log(`${this.name} defends with a shield!`);
    }
}

// DI SKIP DULU GAK NGERTI 