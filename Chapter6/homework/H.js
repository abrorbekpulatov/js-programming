function duplicateRemover(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0, i + 1);
}
let x = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7];
let res = duplicateRemover(x);
console.log(res); 