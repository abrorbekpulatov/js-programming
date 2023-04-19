function fibonacci(N) {
    if (N == 1) {
        console.log(fibonacci(0))
    }
    else if (N == 2) {
        console.log(fibonacci(0, 1))
    }
    else {
        let fib1 = 0
        let fib2 = 1
        console.log(fib1)
        console.log(fib2)
        for (let i = 3; i <= N; i++) {
            let fib_next = fib1 + fib2
            fib1 = fib2
            fib2 = fib_next
            console.log(fib_next)
        }
    }
}
fibonacci(8);
