const numbers= Array.from(document.querySelectorAll(".number"));
const operations=Array.from(document.querySelectorAll(".operation"));
console.log(operations, Array.isArray(operations));

/*
attachNum(a){

}
//numberClick의 num변수를 return 시키는 대신 attchNum function. => no. numberClick() handler function 안에서 구현해 보자.
*/

var firstnum = 0// 이면 if(firstnum) 은 거짓이다!

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
        firstnum=firstnum+num
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
    var firstvalue = parseInt(firstnum)
    var value;// => 계속 value값이 없는데, 여기에 firstvalue를 더하게 되니까 none이 나온 듯? 사실상 계속 value=0을 대입했던 거임..
    //var value =0;
    while(firstvalue != 0){
        value=value+firstvalue
        
        console.log(typeof(value));
        console.log("while",firstvalue, value);
        firstvalue=0
    }
    firstnum = 0
    //console.log(firstvalue+parseInt(firstnum));
    console.log(value);
}
//handler함수 안에서 첫번째 click때는 이 일이 일어나고, 두번째 click때는 저 일이 일어나게 구현할 수는 없겠지?

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