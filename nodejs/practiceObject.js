function person(fname, lname){
    this.firstname=fname,
    this.lastname=lname,
    this.fullname=function(){
        console.log(`my name  is ${this.firstname} and\nsurname is ${this.lastname}`);

    }
}
var p1=new person("luit", "roy");
p1.fullname();
var p2=new person('mallakhamb' , 'competition');
p2.fullname();