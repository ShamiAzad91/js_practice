const accountId = 1234;
let accountEmail = "shami@google.com";
var accountPassword = "21331331";
accountCity = "Ranchi";
let accountState;



// accountId = 2341; not allowed to change const variable
// console.log(accountId);TypeError: Assignment to constant variable.

//note:Prefer not to use the var because of isue of block  and functional scope;

accountEmail="azad@test.com";
accountPassword="321123"; 
accountCity = "Patna";


console.table([accountEmail,accountPassword,accountCity,accountState]);


