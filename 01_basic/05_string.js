// const name = "shami";
// const repoCount = 50;

// console.log(`Hello my name is ${name} and my repositoory is ${repoCount}`);


// const gameName =  new String("Shami");

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('i'));

// const gameName =  new String("hitesh-hc");

// const newString = gameName.substring(0,4);
// console.log(newString);//hite substring me (0,4) hai to last wala nhi include hoga.
//substring(-2,8) me negative value ko wo zero man leta hai

//slice
//The slice() method of String values extracts a section of this string and returns it as a new string,
// without modifying the original string.
const gameName =  new String("hitesh-hc");

const anotherString = gameName.slice(-8,4);//4 ko include nhi krega
// console.log(anotherString);


const newString = new String("   shami      ");
// console.log(newString);
// console.log(newString.trim());



const url = "https://www.shami%20Azad.com";
// console.log(url.replace('%20','-'));
// console.log(url.includes('shami'));
// console.log(url.includes('sunday'));


const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.split(' '));



