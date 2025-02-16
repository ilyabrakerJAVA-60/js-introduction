let array = [2,3,4];

function some(array, fun) {
let i=0;
let res=false;
while(i <= array.length || res!=false) {
    if (fun(array[i],i)){
        res==true;  
    }
i++;
}
return res
}

function evenNumber(num) {
if(typeof(num)=="number")
    return num % 2==0;
else
    return NaN


}

function every(array, fun) {
let res=true;
let flag =0;
let i = 0;
while(i < array.length || flag==0) {
    if (!fun(array[i],i)){
        flag++;
        }
i++;
   }
if(flag>0){
    res=false;
   }
return res;
}

function elmGreaterIndex(elem, index) {
if(typeof(elem)=="number")
    return elem > index
else 
    return NaN
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