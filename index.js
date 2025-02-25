function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < array.length; i++) {
     res = callback(accumulator, array[i], i, array);
    }
  
    return res;
  }
function MyminMax(array) {
    return myReduce(array, (accumulator, currentValue) => {
      accumulator[0] = currentValue < accumulator[0] ? currentValue : accumulator[0]; // минимальное значение
      accumulator[1] = currentValue > accumulator[1] ? currentValue : accumulator[1]; // максимальное значение
      return accumulator;
    }, [array[0], array[0]]);
  }
const array = [3, 1, 4, 1, 5, 9, 2];
let [min,max]=MyminMax(array)
console.log(`min of array=> ${min} , max of array=> ${max}`)
