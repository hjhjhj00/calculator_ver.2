const numbers= Array.from(document.querySelectorAll(".number"));
const operations=Array.from(document.querySelectorAll(".operation"));
const equal=document.querySelector(".equal");

var firstnum = 0;// 이면 if(firstnum) 은 거짓이다!
var firstvalue;
var value=0;
var operation;
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
    const num=event.target.innerText//data type: string
    if(!operation){
        if(!firstnum){//처음에 firstnum이 0이므로 이걸 실행시키려면 !firstnum해야 함.
            firstnum=num
            console.log(firstnum);
        }else{
            firstnum=firstnum+num
            console.log("firstnum:"+firstnum);
        }
        firstvalue = parseInt(firstnum)
        value=firstvalue;
    }else{
        console.log("There's operation")
        if(!firstnum){
            firstnum=num
            console.log(firstnum);
        }else{
            firstnum=firstnum+num
            console.log("firstnum:"+firstnum);
        }
        firstvalue = parseInt(firstnum)
        console.log("operation and click")
        calculate(operation);
        operation=null;
    }
};




function operationClick(event){
    operation=event.target.innerText//data type: string
    firstnum=0
}
//handler함수 안에서 첫번째 click때는 이 일이 일어나고, 두번째 click때는 저 일이 일어나게 구현할 수는 없겠지?
function equalClick(){
    console.log(value);
    firstnum=0
}


numbers.forEach(function(number){
    number.addEventListener("click",numberClick);
})

operations.forEach(function(operation){
    operation.addEventListener("click",operationClick)
})

equal.addEventListener("click",event=>{equalClick()});