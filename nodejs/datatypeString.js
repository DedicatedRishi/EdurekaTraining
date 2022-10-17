// primitive data type string
var firstname= 'rushikesh';//single code double code both can use to assign the value
var secondname= "dharme";
console.log(firstname, secondname);
console.log("hii my name is "+firstname+" and my sirname is " + secondname + " and my birth date is 2001" );
// another to write same of above
//and most important here not use double code or single code for text here use the charachter which is present above the 
//tab button in keyboard 
console.log(`hii my name is ${firstname} and my sirname is ${secondname} and my bith date is 2001`);
var fullname= firstname + secondname;
console.log(fullname);
console.log(fullname.length);//.length used for to show wordlenth of any word
var message="tit for tat";
var search= message.search("tat");//.search is used for show the index no. means ranking no. for the perticular word
console.log(search); 