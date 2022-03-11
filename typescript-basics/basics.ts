// Type

type Person = {
    name: string,
    age: number
};

let person: Person

person = {
    name: "Vesko",
    age: 24
}

console.log(person)


// Functions

function sum (a: number, b:number): number | string {
    return a+b
}

// Generics

function insertInFront<Т>(arr: Т[], value: Т) {
const newArr = [value, ...arr];
return newArr;
}

insertInFront([1,2,3,4], 5);
insertInFront(["Gogo", "Pavel"], "Anastas");

// Classes

class Animal {
    // greed: string;
    // specificType: string;
    // age: number; 

    constructor(
        private greed: string, 
        public type:string, 
        public age: number) {}

    private adopt() {
    return `You've adopted this animal`
    }

}

const cat = new Animal("Cat", "British", 2)

// Interface 

interface Car {
    brand: string;
    model: string;
    HP: number;

    buyIt: () => void;
}

let audi: Car;

audi = {
    brand: "Audi",
    model: "A5",
    HP: 205,

    buyIt () {
        console.log(`You've bought this car already`)
    }
}

class Automobile implements Car {
    brand: string;
    model: string;
    HP: number;

    buyIt () {
        console.log(`You've bought this car already`)
    }
}

// Some other examples

interface Animal {
    name: string
  }
  
  interface Bear extends Animal {
    honey: boolean
  }
  
