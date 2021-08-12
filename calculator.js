const numbers= Array.from(document.querySelectorAll(".number"));
const operations=Array.from(document.querySelectorAll(".operation"));
const equal=document.querySelector(".equal");
const pointButton=document.querySelector(".point");

var firstnum = 0;
var firstvalue;
var value=0;
var operation;
var point;
console.log(operation == null,!operation);

function calculate(a){
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
        value=firstvalue;
    }else{
        console.log("There's operation")
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
        console.log("operation and click")
        calculate(operation);
        operation=null;
    }
};


function operationClick(event){
    operation=event.target.innerText
    console.log(operation)
    firstnum=0
}

function equalClick(){
    console.log(value);
    firstnum=0
}

function pointClick(event){
    point=event.target.innerText;
    console.log(point, point === ".", operation)
}

numbers.forEach(function(number){
    number.addEventListener("click",numberClick);
})

operations.forEach(function(operation){
    operation.addEventListener("click",operationClick);
})

equal.addEventListener("click",event=>{equalClick()});

pointButton.addEventListener("click",pointClick);