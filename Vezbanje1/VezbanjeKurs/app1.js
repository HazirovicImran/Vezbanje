var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        libraryID: 3245,
    },
];

// const sortedLibrary = (parameter) => {
//     const slozeno = parameter.sort((a, b) => a.libraryID - b.libraryID)

//     return slozeno;
// }

const sortedTitles = (parameter) => {
    var ar = parameter.sort(function (a, b) {
        nA = a.title.toLowerCase();
        nZ = b.title.toLowerCase();

        if (nA > nZ) {
            return 1;
        } else if (nA < nZ) {
            return -1;
        }

    });
    return ar;

}

console.log(sortedTitles(library));

const reversedTitles = (parameter) => {
    var ar = parameter.sort(function (a, b) {
        nA = a.title.toLowerCase();
        nZ = b.title.toLowerCase();

        if (nA > nZ) {
            return -1;
        } else if (nA < nZ) {
            return 1;
        }

    });
    return ar;

}

console.log(reversedTitles(library));


// 2. nacin

function sortArrByTitle(arr) {
    const newArr = arr.map((el) => el.title);
    newArr.sort();
    const newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.find((el) => el.title === newArr[i])) {
            newArr2.push(arr.find((el) => el.title === newArr[i]))
        }
        return newArr2;
    }
}
console.log(sortArrByTitle(library));


// 2.zadatak

// Iz 2 poslata niza vratiti 3. niz koji ce sadrzati one elemente iz oba niza koji nisu sadrzani u onom drugom nizu.



const treciNiz = (niz1, niz2) => {
    const noviNiz1 = niz1.filter((element) => !niz2.includes(element));
    const noviNiz2 = niz2.filter((element) => !niz1.includes(element));

    return [...noviNiz1, ...noviNiz2];
}

console.log(treciNiz([1, 2, 3, 4], [3, 4, 5, 6]));