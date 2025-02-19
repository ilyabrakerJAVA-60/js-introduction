function minMax(...operands){
    let result=[Infinity,-Infinity]
    for (let i=0;i<operands.length;i++){
        if (Array.isArray(operands[i])){
            let ArrayMinMax=findMinMaxinArray(operands[i])
            result=getMinMax(result,ArrayMinMax[0],ArrayMinMax[1])
        }
        else
            result=getMinMax(result,operands[i])
    
    }
    
    return result
}
function findMinMaxinArray(array_in_array){
    let result=[Infinity,-Infinity]
    let newmin=result[0];
    let newmax=result[1];
    for(let i=0; i<array_in_array.length;i++){
        if(newmin>array_in_array[i])
            newmin=array_in_array[i]
        if (newmax<array_in_array[i])
            newmax=array_in_array[i]
    }
    return [newmin,newmax]
}
function getMinMax(result,min,max=min){
    if(result[0]>min){
        result[0]=min
    }
    if(result[1]<max){
        result[1]=max
    }
 return result
}
array1=[4,1,2,7,8]
console.log(minMax(array1))
console.log(minMax(1,2,3))
console.log(minMax(1,2,3,[100, 50]))
console.log(minMax(1,2,3,[100,50],[-2,40,200]))

