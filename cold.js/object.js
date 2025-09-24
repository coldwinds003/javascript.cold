/*const mysym = Symbol("key1");

const jsuser = {
    name: "sidhartha",
    age: 20,
    email: "coldwinds.003@gmail.com",
    college: "KIIT",
    "full_name": "sidahrtha jana",
    [mysym]: "mykey1"
};

jsuser.greeting1 = function(){
    console.log("hi sidhartha");
}

jsuser.greeting2 = function(){
    console.log("hi sidhartha", this.name);
}

// call the functions
jsuser.greeting2(); // hi sidhartha sidhartha
jsuser.greeting1(); // hi sidhartha
*/
const tinderuser= new Object()
tinderuser.name="sidhartha jana"
tinderuser.age=12
tinderuser.email="sidharthajan13@gmail.com"
console.log(tinderuser);
const regularuser={
    fullname:{
    email:"coldwinds003@gmail.com",
    name:"sidahrtha jana"
    }

}
console.log(regularuser.fullname);
const obj1={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}
const obj2={
    1:"e",
    2:"f",
    3:"g",
    4:"h"
}
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);
console.log(Object.keys(tinderuser)); 
console.log(Object.values(tinderuser)); 
console.log(Object.entries(tinderuser)); 

