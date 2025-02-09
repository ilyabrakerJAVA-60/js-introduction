//#1
function sumDigits(num)
{
    let res=0;
    if(num<0){
        num=-num
    }
    if (isNaN(num)) {
        return NaN;
    }
    while(num!=0){
        res+=num%10;
        res=Math.floor(res); 
        num=num/10;
     
    }
 return(res)
}
console.log((sumDigits("-123")))

//#2
function ananas(){
    return("a" + +"a" + "as")
}
console.log(ananas().toLowerCase())