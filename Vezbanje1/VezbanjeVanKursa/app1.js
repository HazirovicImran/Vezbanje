// Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako sto se kombinuju prvi sa prvim,
// drugi sa drugim, treci sa trecim znakom itd. Ako je jedan string duzi od drugog, na kraju samo dodati znakove viska.
// Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled"

const PrviSaPrvim = (A, B) => {
    const duzina = A.length > B.length ? A.length : B.length;
    let C = "";
    for (let i = 0; i < duzina; i++) {
        if (A[i] !== undefined && B[i] !== undefined) {
            C += A[i] + B[i];
        } else if (A[i] === undefined) {
            C += B[i];
        } else if (B[i] === undefined) {
            C += A[i];
        }

    }
    return C;
}


console.log(PrviSaPrvim("PERA", "sladoled"));