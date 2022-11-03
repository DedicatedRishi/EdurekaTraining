// logical operator
// &&(AND)= if all condition true then true
// ||(OR)=if all conditionn false then false
// !(NOT)= invert the output
var IsLogedIN=true;
var IsEmailVerified=true;
var IsCardinfovalid=false;

if( IsLogedIN){
    if (IsEmailVerified){
        if(IsCardinfovalid){
            console.log("u can make purchase");

        }
        else{
            console.log("u cannot make the purchase details are wrong");
        }

    }
}
//now we are going to perform this by logical operators
if(IsLogedIN && IsEmailVerified && IsCardinfovalid){
    console.log("u can purchase any thing  from our E-Store");
}else{
    console.log("check ur details plz!!!");
}
//allow use to purchase if he login from any one of the facebook, google, email but mob no is must true
//then in this condition facebook will come in OR operator and mob in AND only
var facebook=false;
var google=true;
var email=false;
var  mobNo=true;
if((facebook || google || email) && mobNo){
    console.log("u log in all");
}else{
    console.log("u not log in mob no. plese log in mob no. first");
}//mobno must true  then only log in show and from facebook email and google one of them is true work will be done
//continue the lecture 7 from 1hr
