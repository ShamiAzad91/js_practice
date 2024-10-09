// const tinderUser = new Object();


const tinderUser = {};

tinderUser.id="123abc";
tinderUser.username = "sammy";
tinderUser.age = 23;
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser = {
    email:'some@test.com',
    fullname :{
        userFullname:{
            firstname:'shami',
            lastname:'azad'
        }
    }
};

// console.log(regularUser.fullname.userFullname);

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};

// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2}

// console.log(obj3);

//response from database
const user = [
    {
        id:1,
        email:'miller@test.com'
    },
    {
        id:1,
        email:'sam@test.com'
    },  {
        id:1,
        email:'sa@test.com'
    },
    {
        id:1,
        email:'sam@test.com'
    },  {
        id:1,
        email:'sam@test.com'
    },  {
        id:1,
        email:'sam@test.com'
    },  {
        id:1,
        email:'sam@test.com'
    },  {
        id:1,
        email:'sam@test.com'
    },  {
        id:1,
        email:'sam@test.com'
    },  {
        id:1,
        email:'sam@test.com'
    },  {
        id:1,
        email:'sam@test.com'
    },  {
        id:1,
        email:'sam@test.com'
    },  {
        id:1,
        email:'sam@test.com'
    },
]

// console.log(user[1].email);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



