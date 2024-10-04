// Soldier
class Soldier {
    constructor(health, strength) {

        this.health = health; 
        this.strength = strength; 

    }

    attack() {

        return this.strength;    
    }

    receiveDamage(damage) {

        this.health -= damage; //Actualizo la salud con la cantidad del daño infringido. 

    }

}

// Viking
class Viking extends Soldier{

    constructor(name, health, strength){
         super(health, strength);
         this.name = name; 
    }

    receiveDamage(damage) {

        this.health -= damage; //Actualizo la salud con la cantidad del daño infringido. 

        if (this.health > 0){ //Si sigue vivo es porque su salud es superior a 0, suponiendo que eso sea la muerte.

            return `${this.name} has received ${damage} points of damage`; 
        
        }
        else {return `${this.name} has died in act of combat`}; //Aquí se incluye si es 0 o menos. 

    }


    battleCry(){

        return `Odin Owns You All!`; 

    }

}

// Saxon
class Saxon extends Soldier {

    constructor(health, strength){ //Si no se incluye funciona igual. 
        super(health, strength);
       
   }


    receiveDamage(damage){

        this.health -= damage; 

        if(this.health > 0){

            return `A Saxon has received ${damage} points of damage`; 
        }
        else { return `A Saxon has died in combat`;}

}



}

// War
class War {}

/*
Iteration 3: Saxon
A Saxon is a weaker kind of Soldier. Unlike a Viking, a Saxon has no name. Their  method will also be different than the original Soldier version.

Modify the Saxon, constructor function, have it inherit from Soldier and re-implement the receiveDamage() method for Saxon.

inheritance
Saxon should extend Soldier
class
You don't have to include a constructor method since this class will inherit perfectly from the parents class, both the health and the strength (it extends Soldier class 😉 )
attack() method
This method should be inherited from Soldier, no need to re-implement it.

should be a function
should receive 0 arguments
should return the strength property of the Saxon
receiveDamage() method
This method needs to be re-implemented for Saxon because the Saxon version needs to have different return values.

should be a function
should receive 1 argument (the damage)
should remove the received damage from the health property
if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
if the Saxon dies, it should return "A Saxon has died in combat"
*/