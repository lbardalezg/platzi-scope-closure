a = 2;
var a; // El hoisting hace que esta línea de aplique antes que la asignación
console.log(a); // Imprime 2
// Orden de ejecución:
// var a;
// a = 2;
// console.log(a);

console.log(b) // Imprime undefined ya que la variable aun no fue inicializada
var b = 2;
// Orden de ejecución:
// var b;
// console.log(b);
// b = 2;

nameOfDog('Elmo');
function nameOfDog(name) { // El Hoisting eleva la declaración al inicio
    console.log(name)
}
// Orden de ejecución
// function nameOfDog(name) {...}
// nameOfDog('Elmo')