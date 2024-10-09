// A JavaScript IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop.
//immediately execute ho jaye isliye iife banate hai;
//global scope pollution me jo variable se kabhi pollute hota hai usko avoid ke liye iife banatate hai.


(function chai(){
    //named iife
    console.log(`DB connected`);
    
})();

//syntax
// ()();


// ( ()=>{
//     console.log(`Db one more time connected`);
    
// })()


( (name)=>{
    console.log(`Db one more time connected ${name}`);
    
})("shami")

//execution of js 
//callstack 
//LIFO


//global environment -> memory creation phase -> execution phase
// agar koi function ka defination ata hai to uska alag se global environment,memory phase,execution banata hai 
//phir kaam kr ke wo return krdeta hai globla environment ko this me.