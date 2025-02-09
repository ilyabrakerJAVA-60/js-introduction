//#1
function sumDigits(num)
{
    res=0;
    if (isNaN(num)) {
        return NaN;
    }
    for(digit = 0;num != 0;num = num / 10){
        digit=num%10;
        res+=digit;
        res=Math.floor(res) 
     
    }
 
    return(res)
}
console.log((sumDigits("123")))

//#2
function ananas(){
    return("a"+"a"*"25a"+"as")
}
console.log(ananas().toLowerCase())
