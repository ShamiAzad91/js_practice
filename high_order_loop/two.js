const myLangObject ={
    js:'javascript',
    cpp:'cplus plus',
    rb:'ruby on rails',
    swift:'swift by apple'
}

// //keys nikalne ke liye methods
// for (const key in myLangObject) {
//    console.log(key);
   
// }

// //value nikalne ke liye methods
// for (const key in myLangObject) {
//     console.log(myLangObject[key]);
    
//  }
// saath me key value
for (const key in myLangObject) {
    console.log(`short cut is ${key} and value is ${myLangObject[key]}`);
    
}

const programming = ['java','cpp','js','python'];

for (const key in programming) {
   console.log(`key is ${programming[key]}`);
   
}