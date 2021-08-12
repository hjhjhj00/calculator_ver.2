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

function calculator(a){
    switch(a){
        case("+"):
            return value=value+firstvalue;
        case("-"):
            return value=value-firstvalue;
        case("X"):
            return value=value*firstvalue;
        case("÷"):
            return value=value/firstvalue;
    }
}



function numberClick(event){
    const num=event.target.innerText//data: string
    if(!operation){
        if(!firstnum){
            firstnum=num
            console.log(firstnum);
        }else if(firstnum && point){
            firstnum=firstnum+point+num
            console.log("point in firstnum:"+firstnum);
            point=null;
        }else if(firstnum && !point){
            firstnum=firstnum+num
            console.log("firstnum:"+firstnum);
        }
        firstvalue = parseFloat(firstnum)
        //console.log("conversion", conversion == null,conversion)
        console.log(conversion!=null)
        if(conversion != null){
            if(conversion == "1/x"){
            firstvalue=1/firstvalue}else if(conversion=="x²"){
            firstvalue=Math.pow(firstvalue,2)}else if(conversion == "√x"){
            firstvalue=Math.sqrt(firstvalue)}
            conversion=null;
        }
        if(sign !=null){
            firstvalue=firstvalue*sign;
            sign=null;
        }
        
        value=firstvalue;
        console.log(value);
    }else{
        console.log("There's operation:"+ operation)
        if(!firstnum){
            firstnum=num
            console.log(firstnum);
        }else if(firstnum && point){
            firstnum=firstnum+point+num
            console.log("point in firstnum: "+firstnum);
            point=null;
        }else if(firstnum && !point){
            firstnum=firstnum+num
            console.log("firstnum:"+firstnum);
        }
        firstvalue = parseFloat(firstnum)
        if(conversion != null){
            if(conversion == "1/x"){
            firstvalue=1/firstvalue}else if(conversion=="x²"){
            firstvalue=Math.pow(firstvalue,2)}else if(conversion == "√x"){
            firstvalue=Math.sqrt(firstvalue)}
            conversion=null;
        }
        if(sign != null){
            firstvalue=firstvalue*sign;
            sign=null;
        }
        console.log("operation starts.")
        calculator(operation);
        console.log(value);
        operation=null;//소수점일 땐 좀 달라지는데 차차 하자!
    }
};


function operationClick(event){
    operation=event.target.innerText
    console.log(operation)
    firstnum=0
}


/*
function convert(a,b){
    switch(a){
        case("1/x"):
            return b=1/b
        case("x²"):
            return b=b^2
        case("√x"):
            return b=b^(1/2)
    }
}
*/
function conversionClick(event){
    conversion=event.target.innerText
    console.log("click conversion : "+conversion)
    //convert(conversion,value);
    /*
    console.log("1/x"===conversion)
    console.log("hi "+value);
    
    if(conversion == "1/x"){
        value=1/value
    }else if(conversion=="x²"){
        value=Math.pow(value,2)
    }else if(conversion == "√x"){
        firstvalue=Math.sqrt(firstvalue)
    }
    console.log("value: "+firstvalue);
    console.log(value);
    conversion=null;
    */
}

function signClick(event){
    sign=(-1)
    console.log(sign);
}

function bracketClick(event){
    bracket=event.target.innerText;
    console.log(bracket);
}


function equalClick(){
    console.log(value);
    
    firstnum=0
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