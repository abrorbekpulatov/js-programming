
function findAnimals(par1, par2) {
    if (par2 >= 2) {
        return par2 + " " + "ta" + " " + par1 + "lar"
    }
    else {
        return par2 + " " + " ta " + " " + par1
    }
}
console.log(findAnimals("it", 1));
console.log(findAnimals("sigir", 10));
console.log(findAnimals("maymun", 25));

