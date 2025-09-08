const accound_Id=15544
let account_Name="GG"
var account_Email="GG@gmail.com"
account_City="Lucknow"

console.table([accound_Id,account_Email,account_Name,account_City]);

// accound_Id=54475   //  Not allowed to chnage const variable 

// Modern progarmmer use let keyword instead of var becuase issue in block scope and functional scope

account_Name="MM"
account_Email="MM@gmail.com"
account_City="Jaipur"
let account_State;

console.table([accound_Id,account_Email,account_Name,account_City,account_State]);
