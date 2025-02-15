let array = [2,3,4];

function some(array, fun) {
let res=false;
   for(let i = 0; i < array.length; i++) {
      if (fun(array[i],i)){
         res =true
      }
      }
return res
}

function evenNumber(num) {
   return num % 2 == 0;
}

function every(array, fun) {
let res=true;
let flag =0;
for(let i = 0; i < array.length; i++) {
   if (!fun(array[i],i)){
      flag++;
   }
   }
   if(flag>0){
      res=false;
   }
 return res;
}

function elmGreaterIndex(elem, index) {
   return elem > index
}
console.log(`using "every" function for even numbers array: ${array}, function ${evenNumber}, result: ${every(array, evenNumber)} - false`)
console.log(`using "some" function for even numbers array: ${array}, function ${evenNumber}, result: ${some(array, evenNumber)} - true`)
console.log(`using "every" function for elements greater than the index values, array: ${array}, function ${elmGreaterIndex}, result: ${every(array, elmGreaterIndex)} - true`)
// debugger;
// console.log(evenNumber(0))
// let array = ["abc", 23];

// function forEach (array, fun) {
//      for(let i = 0; i < array.length; i++) {
//         fun(array[i], i);
//      }
// }
// function print(elem, index){
//     console.log(`index: ${index}, element: ${elem}`)
// };
// forEach(array, print);