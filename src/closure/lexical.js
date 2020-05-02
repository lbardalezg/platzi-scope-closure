// Closure con funcion declarados
const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}

// Se instancia myCount con la función
const myCount = buildCount(1);
myCount();
myCount();
myCount();

// Se instancia myOtherCount con la función
// myOtherCount es independiente de myCount
// ya que se creó un nuevo scope
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();