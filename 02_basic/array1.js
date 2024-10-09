// const marvel_heros = ["Ironman","spiderman","hulk"];
// const dc_heros = ["superman","batman","flash"];
// //  marvel_heros.push(dc_heros);
// // console.log(marvel_heros);//[ 'Ironman', 'spiderman', 'hulk', [ 'superman', 'batman', 'flash' ] ];

// // console.log(marvel_heros[3][2]);//flash

// const all_heros = marvel_heros.concat(dc_heros);//concat :Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(all_heros);//[ 'Ironman', 'spiderman', 'hulk', 'superman', 'batman', 'flash' ];


// const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros);


const all_new_arr = [1,2,3,[4,5,6],7,[5,7,[4,5]]];
const real_all_new_arr = all_new_arr.flat(Infinity);
// console.log(real_all_new_arr);

console.log(Array.isArray("shami Azad"));//false
console.log(Array.from("shami Azad"));//from se hmlog array banate hai 

console.log(Array.from({name:'shami'}));//[] ye blank array dega (intersting)


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

