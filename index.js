 array=['HELLO',122,-10,'Java','JavaScript',500,'Nodejs']
// // найти индекс 
// let index=array.lastIndexOf("Java");
// console.log(index);
const array1=array.filter(function(e,index){
    let res=false;
    if(typeof e=="string"){
        res=e.includes("Java")
        
    }
    return (res)
})
console.log(array1)
// array.forEach(function(e,i){
//     console.log(i+1,e)
// })

// array.map("Java")


let numbers = [1, 2, 3, 4, 5, 6];

// Фильтруем четные числа
let evenNumbers = numbers.map(function(num) {
  if(num % 2 === 0)
    return(`item :${num}`)
 return null
}).join("  ");

console.log(evenNumbers); // [2, 4, 6]

const array2 = [122, 10000, 2, 9, 100000000];
console.log(array2.toSorted());
console.log(array2)
const array3 = [122, 10000, 2, 9, 100000000];
// console.log(array1.sort());
// console.log(array1)
// console.log(array1.toSorted());
// console.log(array1);
console.log(array3.toSorted(function(a, b){
    return a - b;
}))