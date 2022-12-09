const person = {
    firstName: `Imran`,
    lastName: `Hazirovic`,

}

console.log(person);

// Svi objekti u JS-u su povezani sa nekim Prototype objektom tako da mozemo reci da svaki objekat ima Prototype.
// Prototype je objekat koji sadrzi svojstva i metode(properties and methods).

// 2 nacina pravljenja sablona za objekte:

// 1. Constructor function (Konstruktor funkcija) :

function User(firstName, lastName, score) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = score;
};

User.prototype.incrementscore = function () {
    this.score += 1;
}

const imran = new User(`Imran`, `Hazirovic`, 4);

imran.incrementscore();

console.log(imran);

const vahid = new User(`Vahid`, `Gasanin`, 2);
vahid.incrementscore();
vahid.incrementscore();
console.log(vahid);
