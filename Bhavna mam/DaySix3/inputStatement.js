// alert("hello world"); this is use to print the message in box only
// there are three types of alert   
// there are three prompts:-
// 1) window.alert
// 2) window.prompt :- this is  use to take input from the user in a box 
//defination:- prompt helps in taking input in prompt window
// 3) window.confirm //this is used to confirm  any question 
// that is it display are message in box and provide yes or no option
// 2) Window.prompt and window.alert we use every time so no need to take example
// because alert() is work as window.alert
function checkage(){
    var age= window.prompt("Enter ur age");
    alert(`u r age is ${age}`);
    //alert and window.alert both are same
}
function check(){
   
    var value= window.prompt("Enter ur age");
    if(value>=18){
            alert("you are valid to vote");
    }else{
        alert("u cant do the vote");
    }
}
    // use to take command in yes or no
function deleteResources(){
    var value= window.confirm("are u sure to delete deleteResources");
    if(value== true){
        alert("all the Resources are deleted");
    }else{
        alert("try again later");
    }

}