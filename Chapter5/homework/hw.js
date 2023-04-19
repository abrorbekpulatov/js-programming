
function sumNumbers(N) {
    let sum = 0;
    while (N) {
        num = N % 10;
        sum += num;
        N = (N - num) / 10;
    }
    return sum;
}
console.log(sumNumbers(432994));