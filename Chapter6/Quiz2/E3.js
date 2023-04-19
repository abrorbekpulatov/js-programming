function addVectors(v, u) {
    let result = [];
    for (let i = 0; i < v.length; i++) {
        result.push(v[i] + u[i]);
    }
    return result;
}

function dotProduct(v, u) {
    let result = 0;
    for (let i = 0; i < v.length; i++) {
        result += v[i] * u[i];
    }
    return result;
}

let v = [3, 4, 6];
let u = [5, 4, 2];
console.log(addVectors(v, u));
console.log(dotProduct(v, u));