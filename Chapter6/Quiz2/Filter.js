function filterAges(arr) {
    return arr.filter((element) => element >= 18);
}

const input = [13, 25, 19, 17, 21, 33];
const filtered = filterAges(input);
console.log(filtered)