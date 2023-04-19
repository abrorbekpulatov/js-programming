/*function printEvenOrOdd(element) {
    for (let i = 0; i < element.length; i++) {
        if (element[i] % 2 === 0) {
            console.log(`${element[i]} juft son`);
        } else {
            console.log(`${element[i]} toq son`);
        }
    }
}
let element = [2, 30, 3, 2223, 13, 72, 45, 22];
printEvenOrOdd(element);

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
console.log(maxElement); */
function pushNumberArray(arr, newElem) {
    if (typeof newElem === 'number') {
        arr.push(newElem);
    }
    return arr;
}

// Example usage
let input = [45, true, "JS", 23, false, 22];
let output = pushNumberArray(input, 10);
console.log(output); // Output: [45, 23, 22, 10]
