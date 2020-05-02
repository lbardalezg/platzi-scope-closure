const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        // Se está creando closure involuntario
        // y que var es realmente declarado a nivel (hoisting)
        // de la función anotherFunction,
        // por eso "recuerda" el valor de i
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}
anotherFunction();

const oneMoreFunction = () => {
    for (let i = 0; i < 10; i++) {
        // No se crea closure ya que let
        // declara i a nivel del bloque for
        // evitan que el valor de i sea "recordado"
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}
oneMoreFunction();