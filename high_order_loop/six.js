//reduce

const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc : ${acc} and currentValue is ${currVal}`);
    
//       return  acc + currVal
// },0);
// const myTotal = myNums.reduce((acc,currVal)=>{
//     return acc+ currVal
// },0)
const myTotal = myNums.reduce((acc,currVal)=> acc + currVal,0)
// console.log(myTotal);



const courses = [
    { courseName: 'JavaScript Essentials', price: 100 },
    { courseName: 'React for Beginners', price: 150 },
    { courseName: 'Node.js Mastery', price: 200 },
    { courseName: 'Full Stack Development with MERN', price: 250 },
    { courseName: 'CSS and Bootstrap Design', price: 80 }
  ];
  
  
const cartTotal = courses.reduce((acc,item)=> acc + item.price,0);
console.log(cartTotal);


const cart = [
    { product: 'Shoes', price: 50 },
    { product: 'Shirt', price: 20 },
    { product: 'Jeans', price: 40 }
  ];

  const myCartPrice = cart.reduce((acc,item)=> acc + item.price ,0);
  console.log(myCartPrice);
  