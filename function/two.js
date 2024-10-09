function calculateCartPrice(val1,val2,...num1){
   return num1;
}

// console.log(calculateCartPrice(35,20,30,500));

const user = {
    name:'shami',
    price:234
}


function handleanyObject(anyObject){
    return (`username is ${anyObject.name} and price is ${anyObject.price}`)
}

// console.log(handleanyObject(user));

console.log(handleanyObject({
    name:'sam',
    price:344
}));


const myNewArray = [200,300,499,455];

function returnSecondValue(getArray){
    return getArray[1];

}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,22,34,56,90]));

