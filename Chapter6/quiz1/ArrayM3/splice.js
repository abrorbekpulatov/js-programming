function removeThirdElement(arr) {
    arr.splice(2, 1);
    return arr;
}

const input = ["JS", 1299, false, "01012345678", false];
const result = removeThirdElement(input);
console.log(result);

