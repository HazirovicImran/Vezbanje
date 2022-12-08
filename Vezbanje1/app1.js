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

const sortedByTitle = (parameter) => {
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

console.log(sortedByTitle(library));
