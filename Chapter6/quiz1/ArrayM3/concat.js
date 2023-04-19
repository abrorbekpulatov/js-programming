function concatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

const input1 = ["JS", 1299, false, "01012345678", false];
const input2 = [1, 2, 3, 4, 6];
const result = concatArrays(input1, input2);
console.log(result);
