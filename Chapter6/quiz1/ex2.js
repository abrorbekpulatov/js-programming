function pushNumberArray(arr) {
    let natija = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (typeof element === "number") {
            natija.push(element)
        }
    }
    return natija;
}

let input = [45, "JS", true, 23, false, 22];
let output = pushNumberArray(input);
console.log(output);

