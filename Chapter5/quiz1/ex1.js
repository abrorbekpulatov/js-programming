/*function printNestedLoop(N) {
    for (let i = 1; j <= N; ++i) {
        for (let j = 1; j <= i; ++j) {
            console.log();
        }
    }
}
printNestedLoop(8); */

function printNestedLoop(N,) {
    for (let i = 1; i <= N; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}
printNestedLoop(5);
printNestedLoop(8);
printNestedLoop(10);