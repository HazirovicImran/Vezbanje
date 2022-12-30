// File for class subject

// class Car {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }

//     fullName() {
//         console.log(this.name + " " + this.type);
//     }
// }

// const newCar = new Car("Audi", "Limo");

// console.log(newCar);

// newCar.fullName();

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

const newUser = new User("Imran", "Hazirovic");

console.log(newUser);

newUser.fullName();