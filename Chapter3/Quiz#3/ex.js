//Amallarni JS da yozish

// x -= y;
// x %= y;
// x += y;
// x *= y;

//  Bu yerda bizga 2ta qiymat berilgan text1(Abdu) va text2(Deen) bu qiymatlarni yigindisi hissoblash kk.
// let text2 = text2 + text1;
// let Deen = "Abdu Deen";

//. quyidagi masalada: number & string kelgan va bu hato chunki hisoblanadi chunki string & numberni qo'shkanda natija ikki qiymatni yonma yon yozib qoyadi ( 2 + '3' = 23)
function twoNumberAdder(a, b) {

   return a + b
}
let result = twoNumberAdder(2, 3);
console.log(result);

// true yoki false
/* #1
let x = true;
let y = false;
let z = x == x;
- yuqoridagi misolda "x == x" - 'True' ga teng, chunki bir hil qiymatlar doimo 'True' qaytaradi.
   #2
let x = true;
let y = false;
let z = x == y;
- bu misolda "x == y" 'False' ga teng, chunki 2ta turli hil qiymatlar doimo 'False' qaytaradi. 
   #3
let x = true;
let y = false;
let z = y == y;
-bu misolda "y == y" 'True' ga teng, chunki 2ta 'False' - 'False' qaytaradi.
   #4
let x = true;
let y = false;
let z = x === y;
- yuqorida keltirilgan Misolda - 'x === y' bo'lsa javob 'False' bo'ladi, chunki qiymati yoki turlaridan biri o'xshash bo'lishi kk.
*/