function printA(N, M) {
    for (let i = 0; i < M; i++) {
        let line = "";
        for (let j = 0; j < N; j++) {
            line += "*"
        }
        console.log(line);
    }
}

printA(100, 100);