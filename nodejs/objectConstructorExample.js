//object is a reference datatype
//object donot store the value they store the variables in key -value pair
var person={};//empty object literal    
//object with  properties and methods
var person= { 
    firstname: 'rushikesh',
    lastname:  'dharme', 
    age: 21,
    fullname()
    
    {
        console.log("first name is " +this.firstname);
        console.log("surname is "+this.lastname);
        console.log(`full name is ${this.firstname} ${this.lastname}`);
        console.log("ur age is:" +this.age);  
    }
        }  
    console.log(person.firstname);
    console.log(person["lastname"]);
    person.fullname();
     
// lecture 6
    <!-- u learned node.js extremely good -->