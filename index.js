function myParseInt(num,radix=10){
    res=NaN;
    if (radix>1 && radix<37){
        res=InputNumber(num,radix)
    }
    return res;
}

function InputNumber(num,radix){
    let res;
    num=String(num).toLowerCase().trim();
    if(num.startsWith("+")){
        num=num.substr(1)
    res=parsedigit(num,radix)
    }
    else if(num.startsWith("-")){
        num=num.substr(1);
        res=parsedigit(num,radix)*(-1);
    }
    else{
        res=parsedigit(num,radix);
    }
    return res
}

function parsedigit(num,radix){
    let res=0;
    let i=0;
    let charCode;
    let flag = false;
    while(i<num.length){
    charCode=num.charCodeAt(i);
    if(charCode>=48 && charCode<=57){
         charCode=charCode-48; 
    }
    else if (charCode >=97 && charCode<=122){
        charCode=charCode-87;
    }
    else break;
    if (charCode >= radix) break;
    res =res * radix + charCode;
    i++;
    flag=true;
    }
    if (!flag) res=NaN;
    return res;
}

console.log(`conversion string to number in decimal number system myParseInt("123")=123 ${myParseInt(123) == 123}`)
console.log(`conversion string to number in binary number system myParseInt("123",2)=123 ${myParseInt(123, 2) == 1}`)
console.log(`conversion string to number in 36-th number system myParseInt("z.", 36) = 35 ${myParseInt("z.", 36) == 35}`)
console.log(`conversion string to number in decimal number system myParseInt("123.6", 10) = 35 ${myParseInt("123.6", 10) == 123}`)
console.log(`NaN conversion if first symbol doesn't exist in the specified number system myParseInt(".z", 36)=NaN ${isNaN(myParseInt(".z", 36))}`)
console.log(`NaN conversion if radix is incorrect myParseInt("123", 37)=NaN ${isNaN(myParseInt("123", 37))}`);
console.log(`NaN conversion if radix is incorrect myParseInt("123", 1)=NaN ${isNaN(myParseInt("123", 1))}`);
console.log(`conversion string with spaces myParseInt(" 123 ")=123 ${myParseInt(" 123 ") == 123}`)
console.log(`conversion string with spaces myParseInt(" 12 3 ")=12 ${myParseInt(" 12 3 ") == 12}`)
console.log(`conversion empty string myParseInt("")=NaN ${isNaN(myParseInt(""))}`)
console.log(`conversion blank string myParseInt("  ")=NaN ${isNaN(myParseInt("  "))}`)
console.log(`conversion string with a negative number myParseInt("-123") = -123 ${myParseInt("-123") == -123}`)
console.log(`conversion if string is a number myParseInt(123) = 123 ${myParseInt(123) == 123}`)
