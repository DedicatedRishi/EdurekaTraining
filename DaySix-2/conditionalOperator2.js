var age=21;
if(age>=18)
{
    console.log("valid to vote");
}
else{
    console.log("not valid to vote");
}
//similarly we can use this syntax
//(condition) ? (true expression) : (false expression);
(age>=18) ? console.log("valid to vote") : console.log("not valid vote");// here first console.log strictly not required semicolon(;)

//or we can write this  by this condion and this method is common in industry 
var result = (age>=18) ? "Yes, u can vote" : "NO, u can not vote";
console.log(result);