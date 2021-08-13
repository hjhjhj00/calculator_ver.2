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

function calculator(a,b){
    switch(a){
        case("+"):
            return value=value+b;
        case("-"):
            return value=value-b;
        case("X"):
            return value=value*b;
        case("÷"):
            return value=value/b;
    }
}



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
    
};


function operationClick(event){
    mainCalculating();//중요!!operation 주기 전에 value를 초기화시킴.
    operation=event.target.innerText
    console.log(operation)
    firstnum=0
}

function mainCalculating(){
    if(!operation){
        value=firstvalue;
        console.log("No operation");
    }else{
        calculator(operation,firstvalue);
        
        console.log("operation exist?: "+operation);
        console.log(value);
        operation=null; //안해도 자동으로 초기화(??)되는 듯.

    }
}


function conversionClick(event){
    conversion=event.target.innerText
    if(conversion == "1/x"){
        firstvalue=1/firstvalue}else if(conversion=="x²"){
        firstvalue=Math.pow(firstvalue,2)}else if(conversion == "√x"){
        firstvalue=Math.sqrt(firstvalue)}
    console.log(firstvalue);
    /*
    switch(conversion){
        case("1/x"):
            return firstvalue=1/firstvalue;
        case("x²"):
            return firstvalue=Math.pow(firstvalue,2);
        case("√x"):
            return firstvalue=Math.sqrt(firstvalue);
    }
    console.log(firstvalue);//왜 이건 안찍힐까?? if절에서는 찍히고 console.log에서는 안찍힘..! 아마 switch 다음부터는 다 무시(?)되는 거 같은데..! why???
    */
    conversion=null;//없어도 되긴 할듯? 그냥 남아있는게 찝찝해서..
    
}

function signClick(event){
    sign=(-1)
    firstvalue=firstvalue*sign;
    console.log(firstvalue);
    sign=null;
}

function bracketClick(event){
    bracket=event.target.innerText;
    console.log(bracket);
}


function equalClick(){
    mainCalculating();
    console.log(value);
    firstvalue=value;//중요!! result value값을 firstvalue로 넣어 바로 operation 누르고 연산이 가능함.
    firstnum=0//number click event가 시작되면 firstvalue를 초기화해주는 역할(아마도)
}

function pointClick(){
    console.log("There's original operation: "+operation)
    point="."
    console.log(point, point === ".")
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

equal.addEventListener("click",event=>{equalClick();});


pointButton.addEventListener("click",event=>{pointClick();});
signs.addEventListener("click",event=>{signClick();});
brackets.forEach(function(bracket){bracket.addEventListener("click",bracketClick);})
//brackets는 일단 보류..