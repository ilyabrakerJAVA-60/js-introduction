function sum(...operands){ // сколько угодно аргументов
    let sum=0;
    // if(Array.isArray(operands[0]))
    //     operands=[...operands[0]]
    for(let i=0; i < operands.length;i++){
        if(Array.isArray(operands[i])){
            operands=[...operands[i]]
        }
    sum=sum+operands[i]; 
       
    }
    return sum
}
console.log(`sum(1,2,3)=${sum(1,2,"hello")}`)
console.log(`sum([1,2,3])=${sum([1,2,3],4,5,6)}`)
console.log(Math.max(1,2,3))
console.log(Math.max([1,2,3]))