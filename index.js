function minMax(...operands){
    let array_new=[];
    let index=0;
    let result=[Infinity,-Infinity]
    for (let i=0;i<operands.length;i++){
        if (Array.isArray(operands[i])){
            ifHaveisArray(operands[i],array_new,index)   
        }
        else{
            array_new[index]=operands[i]
            index++;
        }
    }
    result=find_minMax(array_new,result)
    return result
}
function find_minMax(array_new,result){
    let newmin=result[0];
    let newmax=result[1];
    for(let i=0; i<array_new.length;i++){
        if(newmin>array_new[i])
            newmin=array_new[i]
        if (newmax<array_new[i])
            newmax=array_new[i]
    }
    return [newmin,newmax]

}

function ifHaveisArray(operands,new_Array,index){
    for(let j=0; j<operands.length;j++){
        new_Array[index]=operands[j];
        index++;
    }   
    }
console.log(minMax(1,2,[3,4,6],5,7,9,[1,2,12],-1))



