var x={
    name:'priyatama',
    lastname: "luit",
    age: 15,
    address:'agomani',
    mob: 70661351656,
    bff: 'tanisha oswal',
    person()
    {
        console.log('firstname is '+this.name);
        console.log("and my surname is "+this.lastname);
        console.log(this.age);
        console.log(`my address is ${this.address}`);
    }
}
console.log(x.name);
x.person();