const moneyBoxOld = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBoxOld(5); // Imprime $5
moneyBoxOld(10); // Imprime $10 y no $15, ya que no se está usando un closure y saveCoins está siendo refefinido
moneyBoxOld(6); // Imprime $6 y no $21, ya que no se está usando un closure y saveCoins está siendo refefinido

const moneyBox = () => {
    var saveCoins = 0; // Fue creado antes de countCoins y dentro de función moneyBox
    const countCoins = (coins) => {
        saveCoins += coins; // saveCoins es visible desde aqui, ya que fue creada fuera en el closure moneyBox
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(5); // Imprime $5
myMoneyBox(10); // Imprime $15 tal como se esperaba
myMoneyBox(6); // Imprime $21 tal como se esperaba