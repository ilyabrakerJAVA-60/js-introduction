const array=['HELLO',122,-10,'Java','JavaScript',500,'Nodejs']
//добавить в массив
// array.push(...[1,2,3])//добавляет аргументы в массив
// console.log(array)
// console.log([1,2,3].push(4,5,6))// возвращает кол-во элементов, после добавления,добавляет в конец 
// // console.log([1,2,3].concat([4,5,6]))
// const array1=[1,2,3].concat([3,4,5])
// console.log(array1[4])
// const ar1=[3,4,5].concat(array)
// console.log(ar1)
// console.log(array.unshift(3,4,5)) // возвращает кол-во элементов, добавляет в начало
// console.log(array)
// console.log(array.splice(3,0,"kuku"))// добавляет удаляет где угодно
// console.log(array)
// console.log(array.pop())// удаляет массив последний и возвращает его
// console.log(array)
// console.log(array.shift())// удаляет массив первый и возвращает его
// console.log(array)
console.log(array.splice(3,1,"python"))
console.log(array)