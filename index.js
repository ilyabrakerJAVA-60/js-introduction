function myReduce(array, callback, initialValue) {
  let accumulator = initialValue === undefined ? [array[0],array[0]]:initialValue;
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array); // Перезаписываем аккумулятор новым значением
  }
  return accumulator;
}
  function MyminMax(array) {
    return myReduce(array, (accumulator, currentValue) => {
        // Вместо изменения аккумулятора, создаем новый массив с обновленными min и max
        const newMin = currentValue < accumulator[0] ? currentValue : accumulator[0]; // Находим новый минимум
        const newMax = currentValue > accumulator[1] ? currentValue : accumulator[1]; // Находим новый максимум
        return [newMin, newMax]; // Возвращаем новый массив с обновленными min и max
    });
}

const array = [3, 1, 4, 1, 5, 9, 2];
let [min, max] = MyminMax(array);
console.log(`min of array=> ${min} , max of array=> ${max}`);
