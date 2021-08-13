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
var arr=[];
var open;
var close;
var arrSlice;
var first;
var count;

function calculate(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]=="X" || arr[i]=="÷"){
            if(arr[i]=="X"){
                arr[i]=arr[i-1]*arr[i+1]
                arr.splice(i-1,3,arr[i])
                
                i=i-2
            }else if(arr[i]=="÷"){
                arr[i]=arr[i-1]/arr[i+1]
                arr.splice(i-1,3,arr[i])
                i=i-2
            }
        
        }
    }
    for(var i=0; i<arr.length; i++){
        if(arr[i]=="+" || arr[i]=="-"){
            if(arr[i]=="+"){
                
                arr[i]=arr[i-1]+arr[i+1]
                arr.splice(i-1,3,arr[i])
                
                
                i=i-2//이대로 ㄱㅊ??
            }else if(arr[i]=="-"){
                arr[i]=arr[i-1]-arr[i+1]
                arr.splice(i-1,3,arr[i])
                i=i-2
            }
        
        }
    }
}

function numberClick(event){
    const num=event.target.innerText
    if(count==1){
        firstnum=first
        count=0
        //console.log("What is"+typeof(first))
    }
        if(!firstnum){
            firstnum=num
            
        }else if(firstnum && point){
            firstnum=firstnum+point+num
            
            point=null;
        }else if(firstnum && !point){
            firstnum=firstnum+num
            
        }
        firstvalue = parseFloat(firstnum)
        console.log(firstvalue);
        //console.log(arr)
        
    
};

function operationClick(event){
    if(count==1){
        count==0
    }else{
        if(arr[arr.length-1]!=")"){
            arr.push(firstvalue)
        }
    }
    
    //console.log("cal: "+arr);
    operation=event.target.innerText
    console.log(operation)
    arr.push(operation)
    console.log("cal: "+arr)
    firstnum=0
    
}

function pointClick(){
    
    point="."
    
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
    console.log("(")
    console.log("cal :"+arr)
    firstnum=0
}

function closeBrackets(event){
    if(count==1){
        count=0
    }else{
        arr.push(firstvalue);
    }
    arr.push(")")
    console.log(")")
    console.log("cal :"+arr)
    firstnum=0
}


function backspaceClick(event){
    
    if(firstnum==0){
        arr.pop();
        console.log("cal :"+arr);
        count=1;
    }else{
        
        first=firstvalue.toString();
        
        first = first.slice(0,-1);
        
        //var firstnumber=parseFloat(first)=>string으로 return할거라 필요x
        console.log(first)
        count=1;
        //console.log(count==1)

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

function equalClick(){
    //console.log(arr[arr.length-1]!=")")
    //console.log(arr[arr.length-1])
    if(arr[arr.length-1]!=")"){
        arr.push(firstvalue)
    }
    
    console.log("cal :"+arr);
while(arr.indexOf("(")!=-1){
    open=arr.indexOf("(")
    close=arr.indexOf(")")
    //console.log(close-open+1)
    arrSlice=arr.slice(open,close+1)
    arrSlice.shift()
    arrSlice.pop()
    
    calculate(arrSlice);
   
    arr.splice(open,close-open+1,arrSlice[0])
    
}

calculate(arr);

console.log("result: "+arr)
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