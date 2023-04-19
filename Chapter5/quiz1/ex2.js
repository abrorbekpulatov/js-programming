function digitCount(N) {
    for (var count = 0; N != 0; N = Math.floor(N / 10)) {
        count++;
    }
    return count;
}
console.log(digitCount(23443098));
console.log(digitCount(2334556));
console.log(digitCount(45));
console.log(digitCount(10035));