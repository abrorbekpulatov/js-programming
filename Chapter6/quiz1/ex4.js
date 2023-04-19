function findMax(array) {
    let maxElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
        }
    }
    return maxElement;
}
let array = [-100, 1000, 3345, 223, 4772, -10, 2];
let maxElement = findMax(array);
console.log(maxElement);