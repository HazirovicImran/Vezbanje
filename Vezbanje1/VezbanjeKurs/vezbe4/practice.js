console.log(1);
console.log(2);

setTimeout(() => {
    console.log(3);
}, 1000);

console.log(4);

setTimeout(() => {
    console.log(5);
}, 950);

function glavniPosao(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}

function pomocniPosao() {
    console.log("pomocni posao");
    console.log("pomocni posao");
    console.log("pomocni posao");
    console.log("pomocni posao");
    console.log("pomocni posao");
}

mojaVar = pomocniPosao;

mojaVar();
