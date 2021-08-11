const numbers= Array.from(document.querySelectorAll(".number"));
const operations=Array.from(document.querySelectorAll(".operation"));
console.log(operations, Array.isArray(operations));

/*
attachNum(a){

}
//numberClick의 num변수를 return 시키는 대신 attchNum function. => no. numberClick() handler function 안에서 구현해 보자.
*/

var firstnum = 0// 이면 if(firstnum) 은 거짓이다!
var firstvalue = 0

/*
function u(){
 if(firstnum){
     console.log("a");
 }else if(2){ //일단 숫자 있는 경우 true로 친단 걸 확인.
     console.log("b");
 }
}
u();
*/

function numberClick(event){
    //console.log(typeof(parseInt(event.target.innerText)));//event.target.value 하면 안되고 innerText하면 된다.
    const num=event.target.innerText//data type: string
    //attachNum(num);
    //return num
    if(!firstnum){//처음에 firstnum이 0이므로 이걸 실행시키려면 !firstnum해야 함.
        firstnum=num
        console.log(firstnum);
    }else{
        console.log("firstnum:"+firstnum);
    }
    

    
};

/*
function parseTEN(){
    const integer=numberClick();
    console.log(integer+"bye");
}
parseTEN();
//numberClick()의 return값 어떻게 받아오지??
*/

function operationClick(event){
    const opr=event.target.innerText//data type: string
    console.log(typeof(event.target.innerText))
}

function x(){
switch ("+") {
    case "+":
        return console.log("hi");
    case "-":
        return console.log("bye");

}
};
 x();

numbers.forEach(function(number){
    number.addEventListener("click",numberClick);
})

operations.forEach(function(operation){
    operation.addEventListener("click",operationClick)
})