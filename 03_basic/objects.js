//singleton
//constructor se  banta hai  Object.create()

//Object literals
const mySym = Symbol("mykey1");


const jsUser = {
    name:"shami",
    age:23,
    email:'shami@test.com',
    [mySym]:'mykey1',
    city:'Ranchi',
    "fullname":"shamiazad",
    isLoggedIn:true,
    lastLoginDays:['mon','sunday','fri']
}

//access objects
// console.log(jsUser.city);
// console.log(jsUser["age"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "shami@gooogle.com";

// //freeze objects se 
// Object.freeze(jsUser);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello JS `);
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



