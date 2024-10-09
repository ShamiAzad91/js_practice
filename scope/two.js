// function one(){
//     const username='shami';

//     function two(){
//         const website = "youtube@test.com";
//         console.log(username);

//     }
//     // console.log(website);
//     two();

// }

// one();

// if (true) {
//   const username = "azad";
//   if (username === "azad") {
//     const website = "youtube";
//     console.log(username + website);
//   }
// //   console.log(website);
// }

// // console.log(username);

//++++++++++++++++++ intersting +++++++++++++++

//function
console.log(addOne(5));

function addOne(num){
    return num + 1;


}
// console.log(addOne(5));

//function expression

// console.log(addTwo(9));//  Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(9));
