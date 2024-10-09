const user ={
    username:'shami',
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username},hello bhai`);
        console.log(this);
        
        
    }
}


// user.welcomeMessage();
// user.username = "Azad";
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     let username = "shami";
//     console.log(this);
    
// }

// chai()


// const chai = function(){
//     let username ="shami";
//     console.log(this.username);
    
// }

// chai();

// const chai = () =>{
//     let username = "shami";
//     console.log(this.username);
    

// }

//explicit
// const addTwo = (num1,num2)=>{
//     return num1 + num2;
// }
// console.log(addTwo(2,4));

//implicit
// const addTwo = (num1,num2) => (num1+num2);

const addTwo  = (num1,num2)=> ({name:'shami'});
console.log(addTwo(3,4));
