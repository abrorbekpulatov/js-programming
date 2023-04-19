
// array sort
/*const decsending = [3938, 1222, 342, 121]; //[4, 10, -10, 22]
decsending.sort(function (a, b) { return b - a });
console.log(decsending); */


//  4 numbers in descending order using if else:

function decSending(num1, num2, num3, num4) {
    if (num1 > num2 && num1 > num3 && num1 > num4) {
        if (num2 > num3 && num2 > num4) {
            console.log(num1, num2, num3, num4);
        } else if (num3 > num2 && num3 > num4) {
            console.log(num1, num3, num2, num4);
        } else {
            console.log(num1, num4, num2, num3);
        }
    } else if (num2 > num1 && num2 > num3 && num2 > num4) {
        if (num1 > num3 && num1 > num4) {
            console.log(num2, num1, num3, num4);
        } else if (num3 > num1 && num3 > num4) {
            console.log(num2, num3, num1, num4);
        } else {
            console.log(num2, num4, num1, num3);
        }
    } else if (num3 > num1 && num3 > num2 && num3 > num4) {
        if (num1 > num2 && num1 > num4) {
            console.log(num3, num1, num2, num4);
        } else if (num2 > num1 && num2 > num4) {
            console.log(num3, num2, num1, num4);
        } else {
            console.log(num3, num4, num1, num2);
        }
    } else {
        if (num1 > num2 && num1 > num3) {
            console.log(num4, num1, num2, num3);
        } else if (num2 > num1 && num2 > num3) {
            console.log(num4, num2, num1, num3);
        } else {
            console.log(num4, num3, num1, num2);
        }
    }

}
decSending(321, 212, 432, 55);







