
// program to check leap year
function checkLeapYear(year) {
    if ((0 == year % 4)) {
        console.log(year + ' Leap-yil');
    } else {
        console.log(year + ' Leap-yil emas');
    }
}
// take input
console.log(checkLeapYear(2012));
console.log(checkLeapYear(1999));
console.log(checkLeapYear(2000));
