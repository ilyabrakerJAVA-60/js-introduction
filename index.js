function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue :[array[0], array[0]];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < array.length; i++) {
     accumulator = callback(accumulator, array[i], i, array);
    }
  
    return accumulator;
  }
function MyminMax(array) {
    return myReduce(array, (accumulator, currentValue) => {
      const min = currentValue < accumulator[0] ? currentValue : accumulator[0]; // минимальное значение
      const max = currentValue > accumulator[1] ? currentValue : accumulator[1]; // максимальное значение
      return [min,max];1
    },);
  }
const array = [3, 1, 4, 1, 5, 9, 2];
let [min,max]=MyminMax(array)
console.log(`min of array=> ${min} , max of array=> ${max}`)
