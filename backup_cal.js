const numbers= Array.from(document.querySelectorAll(".number"));
const operations=Array.from(document.querySelectorAll(".operation"));
const equal=document.querySelector(".equal");
const pointButton=document.querySelector(".point");
const conversions=Array.from(document.querySelectorAll(".conversion"));
const signs=document.querySelector(".sign");
const brackets=Array.from(document.querySelectorAll(".brackets"));

var firstnum = 0;
var firstvalue;
var value=0;
var operation;
var point;
var conversion;
var sign;
var bracket;
var arr=[];
function numberClick(event){
    const num=event.target.innerText//data: string
        if(!firstnum){
            firstnum=num
            console.log("num: "+firstnum);
        }else if(firstnum && point){
            firstnum=firstnum+point+num
            console.log("point in firstnum:"+firstnum);
            point=null;
        }else if(firstnum && !point){
            firstnum=firstnum+num
            console.log("firstnum:"+firstnum);
        }
        firstvalue = parseFloat(firstnum)
        console.log(firstvalue);
        console.log(arr)
        
    
};

function operationClick(event){
    arr.push(firstvalue);
    console.log(arr);
    operation=event.target.innerText
    console.log(operation)
    arr.push(operation)
    console.log(arr)
    firstnum=0
}

function pointClick(){
    console.log("There's original operation: "+operation)
    point="."
    console.log(point, point === ".")
}
function conversionClick(event){
    conversion=event.target.innerText
    if(conversion == "1/x"){
        firstvalue=1/firstvalue}else if(conversion=="x²"){
        firstvalue=Math.pow(firstvalue,2)}else if(conversion == "√x"){
        firstvalue=Math.sqrt(firstvalue)}
    console.log(firstvalue);
    conversion=null;//없어도 되긴 할듯? 그냥 남아있는게 찝찝해서..
    
}

function signClick(event){
    sign=(-1)
    firstvalue=firstvalue*sign;
    console.log(firstvalue);
    sign=null;
}


function equalClick(){
    arr.push(firstvalue)
    console.log(arr);
for(var i=0; i<arr.length; i++){
    if(arr[i]=="X" || arr[i]=="÷"){
        if(arr[i]=="X"){
            arr[i]=arr[i-1]*arr[i+1]
            arr.splice(i-1,3,arr[i])
            console.log("This is :"+arr[3])
            i=i-2
        }else if(arr[i]=="÷"){
            arr[i]=arr[i-1]/arr[i+1]
            arr.splice(i-1,3,arr[i])
            i=i-2
        }
    console.log("length: "+arr.length);
    }
}
for(var i=0; i<arr.length; i++){
    if(arr[i]=="+" || arr[i]=="-"){
        if(arr[i]=="+"){
            console.log("init"+arr+"i :"+i)
            arr[i]=arr[i-1]+arr[i+1]
            arr.splice(i-1,3,arr[i])
            
            console.log("last :"+arr+"i :"+i)
            i=i-2//이대로 ㄱㅊ??
        }else if(arr[i]=="-"){
            arr[i]=arr[i-1]-arr[i+1]
            arr.splice(i-1,3,arr[i])
            i=i-2
        }
    console.log("length: "+arr.length);
    }
}
console.log(arr)
arr=[];
firstnum=0;
}





numbers.forEach(function(number){
    number.addEventListener("click",numberClick);
})

operations.forEach(function(operation){
    operation.addEventListener("click",operationClick);
})
conversions.forEach(function(conversion){
    conversion.addEventListener("click",conversionClick);
})

pointButton.addEventListener("click",event=>{pointClick();});
signs.addEventListener("click",event=>{signClick();});
equal.addEventListener("click",event=>{equalClick();});

/*






brackets.forEach(function(bracket){bracket.addEventListener("click",bracketClick);})
//brackets는 일단 보류..
*/