const fruits = () => {
    // fruit está definido enscope local
    var fruit = 'apple';
    console.log(fruit)
}
fruits();
// Debido a que fruit fue definido en scope local
// de función fruits, no puede ser llamado desde afuer
//console.log(fruit);

const anotherFuncion = () => {
    var x = 1;
    var x = 2; // Si puede ser redeclarada
    let y = 1;
    // let y = 2; // No puede ser redeclarada
    console.log(x)
    console.log(y)
}