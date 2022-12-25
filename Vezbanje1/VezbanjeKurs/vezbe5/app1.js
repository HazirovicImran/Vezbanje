// let i const promjenljive obezbedjuju block scope.
for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);
}

// promjenljive definisane preko var keyword su global scope promjenljive.
for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);
}