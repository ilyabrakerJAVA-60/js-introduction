 let array=['JavaScript',122,-10,'Java','HELLO',500,'Nodejs']
let array1=array.slice()// copy array

 function isNumber(element){
    return (typeof(element)=="number")
       
}



 function orderedList(array) {
 const items=array.map(getItem).join("")
 return `<ol>${items}<ol>`
  
  }
function getItem(item){
    const res= `<li class="item ${typeof(item)=="number" ? "item_number" : ""}"
    >${item}</li>`
    return res

}
array=array.filter(e=>isNumber(e))
console.log('array.some(a => a<0)=>',array.some(a => a<0))
console.log('array.every(a => a<0)=>',array.every(a=> a<0))
console.log(`sum of array [${array}] =>`,array.reduce((acc,cur)=>acc+cur))
 console.log(`minimal value of array [${array}] =>`, array.reduce((acc,cur)=>(acc<cur?acc:cur),0))
 array=array1.slice(1,3);
  const bodyElement = document.querySelector("body");
  bodyElement.innerHTML = orderedList(array);
//объяснение методов,которые обрабатывают массив с callback
// forEach-это метод массива, который позволяет выполнить определенную функцию для каждого элемента массива. Он не возвращает новый массив, а просто выполняет побочные действия для каждого элемента.
//map- используется для преобразования элементов массива в новый массив, основываясь на том, что возвращает функция, переданная в map. Этот метод создает новый массив с результатами вызова функции для каждого элемента исходного массива, не изменяя сам массив.
//filter-используется для фильтрации элементов массива на основе заданного условия, создавая новый массив, содержащий только те элементы, которые удовлетворяют этому условию. Исходный массив не изменяется.
//some-используется для проверки, удовлетворяет ли хотя бы один элемент массива заданному условию. Этот метод возвращает true, если хотя бы один элемент массива удовлетворяет условию, и false, если ни один элемент не удовлетворяет условию. 
// every-проверяет, удовлетворяют ли все элементы массива условию
//reduce-Это позволяет выполнить такие операции, как суммирование, умножение, создание объектов и многие другие, обрабатывая элементы массива поочередно и аккумулируя результат.