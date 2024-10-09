// //for 

// // for (let i = 1; i < 10; i++) {
// //     const element = i;
// //     if(element === 5){
// //         console.log("5 is best no")
// //     }
// //     console.log(i);
    
    
// // }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
    
//     for(let j = 1; j<=10; j++){
//         // console.log(`inner loop ${j}`);
//         console.log(`${i} * ${j} = ${i*j}`);
        

//     }
    
// }

// const myArray = ['flash','batman','ironman'];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }


//break and continue
for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log(`5 is detected`);
        break;
    }
    
    console.log(`value of i is:${i}`);
    
}


//break and continue
for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log(`5 is detected`);
        continue;
    }
    
    console.log(`value of i is:${i}`);
    
}