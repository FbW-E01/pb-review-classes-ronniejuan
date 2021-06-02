// SCOPE
// accessibillity of a variable and function in a  particular part of your code.
//Scoping parts of your code helps improve testability of your code, helps track bugs and help track bugs and prevent bugs

//global scope


//GLOBAL SCOPE = this variable is accessible anywhere in this file.
let counter = 20; //this is the global scope.

function a(){
        const counter =7;
        console.log(counter)
        }
a();
console.log(counter)

//Variables defined inside a function are in local scope while variables defined outside of a function are in the global scope. Each function creates a new scope.

// function test (user){ // "user exist in the function scope"
    // console.log(user);
// }
// test ("Leo Gonsales");

// the "user" variable does not  not exist in the global scope
// console.log(user)//ERROR

//block scope
//block statements like if, switch and for create new "Block scope"
//When you use let and const for variables here , those  variables are scoped inside.


// if (true) {
// const fruit = "loquat"
// }

// for (let i = 0;;){
//     break;
// }



// const fruit = ["pera", "manzana"];


// if(fruits.length <3) {
//     msg = "very low on fruit danger";
//     let x = 9;
//     console.log(x);
// }



// Lexical scope = inner function having outer  to the stuff from outer functions
function getMessagePrinter(message) {
    let x = 9;


    return function  MEGAPRINTER (){
        console.log("output" , message);
        console.log("OUTPUT", x)
    }
}
const todo = getMessagePrinter("fish go blubb")
console.log("//////////////////////");
todo();



//PROBLEM SOLVING.

