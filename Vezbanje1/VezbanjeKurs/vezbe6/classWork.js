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

// Create a new class User with data like name, lName(last name), yearOfBirth
// Create a method which will calculate how old is user.

class User {
    constructor(firstName, lastName, yearOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.age = this.calculateAge(yearOfBirth);
    }

    fullName() {
        console.log(this.firstName + " " + this.lastName);
    }

    calculateAge() {
        return 2022 - this.yearOfBirth;
    }
}



class AdditionalInfo extends User {
    statesArr = [
        {
            state: "USA",
            cId: "+1",
        },
        {
            state: "Mexico",
            cId: "+52"
        },
        {
            state: "Germany",
            cId: "+49"
        },
        {
            state: "Serbia",
            cId: "+381"
        },
        {
            state: "BiH",
            cId: "+387"
        },
        {
            state: "Montenegro",
            cId: "+382"
        },
    ];

    // street, city, state, phone number
    constructor(street, city, state, phoneNumber) {
        super(newUser.fullName, newUser.lastName, newUser.yearOfBirth, newUser.age)
        this.street = street;
        this.city = city;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.number = this.numberHandler(this.state, this.cId)
    }

    numberHandler(state, phoneNumber) {
        this.findState = this.statesArr.find(s => s.state === state);
        return phoneNumber.replace(phoneNumber[0], this.findState.cId);
    }
}



const newUser = new AdditionalInfo("Imran", "Hazirovic", 2003, "Kraljevica Marka 17", "Novi Pazar", "0645256656");

console.log(newUser);

newUser.fullName();

const additional = new AdditionalInfo("Imran", "Hazirovic", 2003, "Kraljevica Marka 17", "Novi Pazar", "0645256656");

console.log(additional);
