// Array
/*The Array object, as with arrays in other programming languages, enables storing
\ a collection of multiple items under a single variable name
, and has members for performing common array operations. */

/*Description of array
JavaScript arrays are resizable and can contain a mix of different data types. 
JavaScript array-copy operations create shallow copies.
*/

// A shallow copy of an object is a copy whose properties share the same references  (heap memory)Array krta hai
// A deep copy of an object is a copy whose properties do not share the same references(stack memory)



// const myArr = [0,1,23,4,true,"shami"];
// const myHeros = ["Ironman","spiderman","hulk"];
// const myArr1 = new Array(2,3,45,5);
// console.log(myArr1);


//Array Methods

// const myArr = [1,2,3,4,5];
//  myArr.push(6);
//  myArr.push(7);
//  //push for add elemnt in array
// // console.log(myArr);
// myArr.pop();
//  //pop for remove last elemnt in array

// console.log(myArr);

// const myArr = [1,2,3,4,5];
// // myArr.unshift(9);//unshift 1st index  me add krta hai
// // myArr.shift()//shift 1st index ko remove krta hai
// // console.log(myArr);
// console.log(myArr.includes(5));//true
// console.log(myArr.indexOf(3));//2 index me hai 3
// console.log(myArr.indexOf(31));//-1 mtlb present nhi hai

// const myArr = [1,2,3,4,5];
// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



//slice,splice

const myArr = [1,2,3,4,5];
console.log("A",myArr);

const myn1 = myArr.slice(1,3);//slice original array ko manipulate nhi krta hai
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);//splice original array ko manipulate krta hai
console.log("A",myArr);
console.log(myn2);
console.log("b",myArr);












