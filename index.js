 array=['JavaScript',122,-10,'Java','HELLO',500,'Nodejs']
 function compNumStr(e1, e2){
    let res=-1;
    if(typeof(e1)=="number"&&typeof(e2)=="number")
        res=e2-e1
    else if(typeof(e1)!="number"&&typeof(e2)!="number")
        res = e1 > e2 ? 1 : (e1 < e2 ? -1 : 0);
    else if(typeof(e1)!="number")
        res=1
    return res
 }
 console.log(array.sort(compNumStr))
 
 function orderedList(array) {
 const items=array.map(getItem).join("")
 return `<ol>${items}<ol>`
  
  }
function getItem(item){
    const res= `<li class="item ${typeof(item)=="number" ? "item_number" : ""}"
    >${item}</li>`
    return res

}
  const bodyElement = document.querySelector("body");
  bodyElement.innerHTML = orderedList(["Hello", 300, "Java", "Nodejs", 100]);

