// console.log("s");
// console.log("h");
// console.log("a");
// console.log("m");
// console.log("i");

//function defination
function sayMyName() {
  console.log("s");
  console.log("h");
  console.log("a");
  console.log("m");
  console.log("i");
  
}
// sayMyName();;//execution

function addTwoNumber(num1,num2){//parameters

// let result = num1 + num2;
// return result;    

return num1 + num2
}

// addTwoNumber(3,4);//arguments


const result = addTwoNumber(3,4);
// console.log(`Result is ${result}`);

// function userLogin(username){
//     return `${username} just loggedIn`;
// }

// console.log(userLogin("shami"));
// ;


function userLogin(username="Azad"){
    if(!username){
        console.log('please enter a name');
        return
        
    }
    return `${username} just loggedIn`;
}

console.log(userLogin("shami"));
console.log(userLogin("asif"));
console.log(userLogin());


