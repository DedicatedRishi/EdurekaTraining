// this js file is get connected to index.html to view proper output of this file because only 
// because going run all this statments in actual use of this on webpage that is it get calculated in
// backend and get printed on html
// there are four ways to implement output statments they are
// console.log() :- this get display on web inside console section which present in inspection
// window.alert():- this get appear a pop window on webpage and run script or give message in between alert box
// document.write():- this  use to print all the java script on html webpage as  html output 
//                  and 
// innerhtml:- 
// example:-
//  1)  console.log(); :-
console.log('hii i am rushikesh');//this get printed in console section of the browser 
var a=200;
var b=02;
var c= a-b;
console.log(c);
console.log('hello world i am edureka student');
// 2) window.alert(); :-
window.alert('hello world');
function myfunction(){//this function get created here  but to use first access any where then this  
    // will run neither it will  not run
    window.alert('hello  from this function \n' +c);
    //how many times u create window.alert it will that times the pop window agter ok
    window.alert(c);
}
// 3) document.write(); :-
document.write('welcome to this training programm');
// and if u  want to opent this in new window then it will be happened by 
// using button in html file and  create here  funtion for it
function onclick(){
    document.write('welcome to training program rushi');
    // document.write(c);
}

//4) innerHTML= ""; :-
//inner html helps to add data within the element onclicking the button by using id in that element
function printMessage(){
     
    document.getElementById("message").innerHTML = "Hello World";
}

//best example for industry
function printtext(){
    var name=document.getElementById("username").value;
    document.getElementById("text").innerHTML=`Hello ${name}`;
}
//this can also say thay how to take input from textbox
function print(){
    var value=document.getElementById("enter").value;
    document.getElementById("print").innerHTML=`Welcome "${value}"`;
}