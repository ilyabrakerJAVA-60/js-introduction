//arrow functions
const sumFun=function(op1,op2){
    return op1+op2; 
}
const sumArrowFun=(op1,op2) => op1+op2;
//statement
// let c,a=10,b=3
// if (a >b){
//     c=a+b;
// } else{
//     c=a*b;
// }
// c = a > b ? a + b : a * b
// const printC =function(){
//   let c,a=10,b=3
// if (a > b){
//     c=a+b;
// } else{
//     c=a*b;
// }  
// console.log(c)
// }

// printC()
// let a = 10,b = 3
// const printCarrow=(a,b)=> console.log(a>b? a+b : a*b)
// printCarrow()
// let array=[10,-7,120]
// const sorted1=array.sort((a,b)=> a>b ? 1:-1 ) 
// console.log(sorted1)
console.log([10,-7,120].sort((a,b)=>a-b))
