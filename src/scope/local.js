const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
// console.log(hello); //No se accede a hello ya que está definido en el scope local

var scope = 'i am global';
const functionScope = () => {
    // Al declararse la variable dentro de la función
    // es usada en vez de la variable global
    // La variable scope que es global no es modificada
    var scope = 'i am just a local';
    const func = () => {
        return scope;
    }
    // Se muestra scope local
    console.log(func());
}
functionScope();
// Se muestra scope global
console.log(scope)