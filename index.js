// let i=2;
// a="abc";
// console.log(a)
// const b=3;
// b="lmn"; -- const cannot be update
/* PRIMITIVES TYPES
1.number 
2.string
3.boolean(true and fales)
4.underfined(underfined)
5.null(null)
*/
//1.number
let a=100;
a /=3;
console.log('none-normalized result of division 100 on 3',a)
// отбрасывает дробную часть
a=Math.trunc(a)
console.log('normalized result of division 100 on 3',a) 
// округляет 
a=Math.round(a)
console.log('normalized result of division 100 on 3',a)
// нижняя граница числа 
console.log("30.1 after method floor - ", Math.floor(30.1));
// верхняя граница числа 
console.log("30.1 after method ceil - ", Math.ceil(30.1));

