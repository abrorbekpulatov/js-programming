function copyNotDuplicate(a, b, c, d) {
	let merged = a.concat(b, c);
	for (let i = 0; i < merged.length; i++) {
		if (!d.includes(merged[i])) {
			d.push(merged[i]);
		}
	}
}
let a = [1, 2, 3];
let b = [0, 2, 3, 4, 5];
let c = [1, 2, 4, 5, 7, 3];
let d = [];
copyNotDuplicate(a, b, c, d)
console.log(d);



