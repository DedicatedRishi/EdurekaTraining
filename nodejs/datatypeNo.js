// NaN error means not a no.
//when  we enter any no. in codes it will be the string not the value or no.

var valueone=100;
var  valuetwo=100;
var valuetotal=valueone+valuetwo;
console.log(valuetotal);
//output PS E:\EdurekaTraining\nodejs> node datatypeno
//200


var valueone=100;
var  valuetwo="100";
var valuetotal=valueone-valuetwo;
console.log(valuetotal);


var valueone=100;
var  valuetwo="rushikesh";
var valuetotal=valueone+valuetwo;
console.log(valuetotal);


var valueone=100;
var  valuetwo="rushikesh";
var valuetotal=valueone-valuetwo;
console.log(valuetotal);
/* the output of this js is 

PS E:\EdurekaTraining\nodejs> node datatypeno
200
0
100rushikesh
NaN
PS E:\EdurekaTraining\nodejs>   */

var valueone=-100;
var  valuetwo=0;
var valuetotal=valueone/valuetwo; //if we divide any psotive no. by zero it will give answer="infinity" and any negative no. then -infinity
console.log(valuetotal);

var isRegister;
if(isRegister){
    console.log("yes  u are register");
}else{
    console.log("u are not register");
}
var value1;
console.log(value1);//undefined it is typed by mistake
var value2=null;
console.log(value2);//null means no value assign for now but it will be assigned later

if(value1){
    console.log("very bad!!");
}else{
    console.log("very good!!!");
}
if(value2){
    console.log("worst!!");
}else{
    console.log("superb rushi!!!");//both undefined and null are consider as false in cooditional expression
}