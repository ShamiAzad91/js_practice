//for of

["","",""]
[{},{},{}];


const arr = [1,2,3,4,5,6];
// for (const num of arr) {
//     console.log(`value of num is ${num}`);
    
// };


const greeting = "hello world";

for (const greet of greeting) {
    console.log(`each char is ${greet}`);
    
    
}


//Maps:
// maps is also know for uniquenes

const map = new Map();
map.set('in','India');
map.set('fr','france');
map.set('usa','united state of America');

// console.log(map);

for (const [key,value] of map) {
    console.log(`key is" ${key}" :- value is ${value}` );
    
}

const myObjects = {
    game1:'football',
    game2:'cricket',
    game3:'javelin'
}


for (const [key,value] of myObjects) {
    console.log(key, ":-",value);
    
}//TypeError: myObjects is not iterable
//object me for of loop kaam nhi krta hai