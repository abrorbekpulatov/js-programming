function findIndex(arr, val) {
    return arr.indexOf(val);
}

const input = ["JS", 1299, false, "01012345678", false];
const result = findIndex(input, "01012345678");
console.log(result);
