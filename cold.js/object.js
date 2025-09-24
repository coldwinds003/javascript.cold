const mysym = Symbol("key1");

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
