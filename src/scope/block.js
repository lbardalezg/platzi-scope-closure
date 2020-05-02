const fruits = () => {
    if(true) {
        var fruits1 = 'apple'; // var está definida en el scope local de la función
        let fruits2 = 'banana'; // let está establecida dentro del scope del bloque if
        const fruits3 = 'kiwi'; // const está establecida dentro del scope del bloque if
        console.log(fruits1); // Dentro del scope de función, funciona
        console.log(fruits2); // Dentro del scope de bloque if, funciona
        console.log(fruits3); // Dentro del scope de bloque if, funciona
    }
    console.log(fruits1); // Dentro del scope de función, funciona anque estemos fuera de if
    //console.log(fruits2); // Fuera del scope de bloque if, no funciona aunque estemos dentro de la función
    //console.log(fruits3); // Fuera del scope de bloque if, no funciona aunque estemos dentro de la función
}
fruits();

let x = 1;
{
    // x dentro del bloque es diferente que fuera del bloque
    // x exterior no es modificado ya que bloque límita a let
    let x = 2;
    console.log(x); // Imprime 2
}
console.log(x); // Imprime 1

var y = 1;
{
    // y dentro del bloque es el mismo que fuera del bloque
    // y exterior es modificado ya que bloque no límita a var
    var y = 2;
    console.log(y); // Imprime 2
}
console.log(y); // Imprime 2

const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        // La función está accediendo al valor actual
        // que recorre la variable i, por lo que
        // siempre va a mostrar 10 (último valor
        // que tiene i)
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}
anotherFunction();

const oneMoreFunction = () => {
    for (let i = 0; i < 10; i++) {
        // La función está accediendo al valor de la
        // variable i que recorre en cada momento, por
        // lo que va a mostrar los valores
        // del 0 al 9 (valor en cada momento de invocación)
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}
oneMoreFunction();