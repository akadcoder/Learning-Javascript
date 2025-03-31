const accountId = 144553
let accountEmail = "shivraj@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "shivraj@singh.com"
accountPassword = "123456789"
accountCity = "rajasthan"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])