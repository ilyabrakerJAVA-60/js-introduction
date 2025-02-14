 const array =["abc",23];
//  array[1000000]=10;
 console.log(array.length)
 console.log(array[0])
 function forEach(array,fun){
    for (let i =0;i<array.length;i++){
        fun(array[i],i);
    }
 }
 function print(element,index){
    console.log(`index: ${index}, element: ${element}`)
 }
 forEach(array,print)