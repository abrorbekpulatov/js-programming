function printJuftyokiToq(element) {
    for (let i = 0; i < element.length; i++) {
        if (element[i] % 2 === 0) {
            console.log(`${element[i]} juft son`);
        } else {
            console.log(`${element[i]} toq son`);
        }
    }
}
let element = [2, 30, 3, 2223, 45, 22];
printJuftyokiToq(element);


