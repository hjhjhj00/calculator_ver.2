const numbers= Array.from(document.querySelectorAll(".number"));
const operations=Array.from(document.querySelectorAll(".operation"));
const equal=document.querySelector(".equal");
const pointButton=document.querySelector(".point");
const conversions=Array.from(document.querySelectorAll(".conversion"));
const signs=document.querySelector(".sign");
const openBracket=document.querySelector(".openBracket");
const closeBracket=document.querySelector(".closeBracket");
const backspace=document.querySelector(".backspace");

var firstnum = 0;
var firstvalue;
var value=0;
var operation;
var point;
var conversion;
var sign;
var bracket;
var arr=[];
var open;
var close;
var arrSlice;
var first;
var count;
//console.log(parseInt("2")+"+"+parseFloat("3.5")+"*"+parseInt("10"));
/*
var arr=[2,"+",3.5,"X",54,"÷",9,"X",2,"-",6,"÷",3];
var arr=["(",1,"+",2,")","X",5,"÷",5.5,"+","(",5,"-",1,")"]
console.log(arr);
*/
function calculate(arr){
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
}

function numberClick(event){
    const num=event.target.innerText//data: string
    if(count==1){
        firstnum=first
        count=0
    }
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
    if(count==1){
        count==0
    }else{
        if(arr[arr.length-1]!=")"){
            arr.push(firstvalue)
        }
    }
    
    console.log(arr);
    operation=event.target.innerText
    console.log(operation)
    arr.push(operation)
    console.log(arr)
    firstnum=0
    console.log("print"+firstnum);
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

function openBrackets(event){
    arr.push("(")
    console.log(arr)
    firstnum=0
}

function closeBrackets(event){
    //if(count==1)
    arr.push(firstvalue);
    arr.push(")")
    console.log(arr)
    firstnum=0
}


function backspaceClick(event){
    console.log("IS? :")
    console.log(firstnum==0)
    if(firstnum==0){
        arr.pop();
        console.log(arr);
        count=1;
    }else{
        console.log(typeof(firstvalue));
        first=firstvalue.toString();
        console.log(first);
        first = first.slice(0,-1);
        console.log("This is")
        console.log(first)
        var firstnumber=parseFloat(first)
        console.log(first)
        count=1;
        console.log(count==1)

        //firstvalue=firstnumber
        //firstvalue=first
        //print(firstvalue);
        
    }
    /*
    var lastArr=arr[arr.length-1]
    console.log(typeof(lastArr));
    
    if(typeof(arr[arr.length-1]!="number")){
        arr.pop();
        console.log(arr);}*/
    
    }
    


var open;
var close;
var arrSlice;
//var bracketResult;
function equalClick(){
    console.log(arr[arr.length-1]!=")")
    console.log(arr[arr.length-1])
    if(arr[arr.length-1]!=")"){
        arr.push(firstvalue)
    }
    
    console.log(arr);
while(arr.indexOf("(")!=-1){
    open=arr.indexOf("(")
    close=arr.indexOf(")")
    console.log(close-open+1)
    arrSlice=arr.slice(open,close+1)
    arrSlice.shift()
    arrSlice.pop()
    console.log("REALarrSlice :"+arrSlice)
    calculate(arrSlice);
    console.log("REALresult :"+arrSlice);
    console.log("arrSlice"+arrSlice+arrSlice.length)
    arr.splice(open,close-open+1,arrSlice[0])
    console.log("REAL :"+arr)
}
console.log("Initial:"+arr)
calculate(arr);

console.log(arr)
arr=[]
firstnum=0
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
openBracket.addEventListener("click",openBrackets);
closeBracket.addEventListener("click",closeBrackets);
backspace.addEventListener("click",backspaceClick);