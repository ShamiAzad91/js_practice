// DataTypes Summary 

// two types of datatype 
// 1.Primitive 2.Non-primitive

//NOTE: JS IS Dynamically Typed Language

//Primitive:  iska ek copy milta hai 
// Null Number String Symbol  Boolean BigInt Undefined
const score = 234;
const scoreValue = 100.34

const isLoggedIn = false;
const outsideTemop = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);//false


const bigNumber = 324556845566334n;

//Non-primitive(Reference) isme direct refrence milta hai origiinal value ka agar hm refrence me change krenge to original value bhi change ho jayega
//Array, Objects,Function

const hero = ["ironman","spiderman","hulk"];

let myObj ={
    firstName:'shami',
    lastName:'azad'
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof myFunction);


//+++++++++++++++++++++++ Stack and heap +++++++++

// Stack(primitive)
// Heap(non-primitive or Refrence)

let userName = "shami";
let anotherName = userName;
anotherName = "Azad";
console.log(userName);
console.log(anotherName);


let userOne ={
    email:"user@test.com",
    upi:"653537ybl"
}


let userTwo = userOne;
userTwo.email = "hulk@thor.com";

console.log(userTwo.email);
console.log(userOne.email);



