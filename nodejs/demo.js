var value=2001;//this  is local scope variable
function myfunction(){
    /*this this global scope variable*///function variable which can be using only by function call and no  another way to call or print the variable present in function
    var myvalue=2001;
    console.log(value);
    console.log(myvalue);//this will print variable inside the function but by using function call
}
//console.log(myvalue)//this can not acces by this way this will access only by call the function and also this will not work it will give error
console.log(value);
myfunction();