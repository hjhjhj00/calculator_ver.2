const numbers= Array.from(document.querySelectorAll(".number"));
const operations=Array.from(document.querySelectorAll(".operation"));
console.log(operations, Array.isArray(operations));



function numberClick(event){
    //console.log(typeof(parseInt(event.target.innerText)));//event.target.value 하면 안되고 innerText하면 된다.
    const num=parseInt(event.target.innerText)//data type: number

    return num
    
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