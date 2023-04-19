
function removeBooleanElements(arr) {
    return arr.filter((element) => typeof element !== "boolean");
}

const input = [1999, "JS", true, 1299, false, "01012345678", false];
const filtered = removeBooleanElements(input);
console.log(filtered);