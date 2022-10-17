// object constructor defininnng
function person(fname,lname){
        this.firstname=fname,
        this.lastname=lname,
        this.fullname=function person()
        {
            console.log(`hello my name is ${this.firstname} and my title is ${this.lastname}`);
        }

}
//intantiating object
  var p1=new person('rushikesh','dharme');
    p1.fullname();
    var p2=new person('ashwin', "dharme");
    p2.fullname();