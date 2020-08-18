/*
Normal js function
function myFunc{
    statements;
}

Arrow Functions
const myFunc=()=>{
    statements;
}    No more issues with this keyword
*/

const printMyName=(name)=>{
    console.log(name)
}
printMyName('Ashish')

const printNum=num=> console.log(num*2) //a really short way for only one line of statement and one argument
printNum(4);