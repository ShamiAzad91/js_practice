const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newNums = myNumber.map((num)=> num + 10 );
// const newNums = myNumber.map((num)=>{
//     return (num + 10)
// });

// const newNums = myNumber.map((num) => num * 10).map((num)=>num + 2); 
 const newNums = myNumber.map((num) => num * 10).map((num)=>num + 2).filter((num)=>{
    return (num>=62)
 });


console.log(newNums);