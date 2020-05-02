var hello = 'Hello';
var hello = 'Hello +'; // Es posible volver a declarar
let world = 'Hello World';
// let world = 'Hello'; // No es posible volver a declarar, lanza error
const helloworld = 'Hello World!';
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}
anotherFunction();

// globalVar es creado dentro de helloWorld
// y puede ser usada fuera de este, lo cual
// nos quita control sobre el programa
const helloWorld = () => {
    globalVar = 'im global';
}
helloWorld();
console.log(globalVar);

// En la doble asignación mostrada, el valor
// de globalVar vuelve a ser cambiado
const oneMoreFunction = () => {
    var localVar = globalVar = 'Im Global';
}
oneMoreFunction();
console.log(globalVar);