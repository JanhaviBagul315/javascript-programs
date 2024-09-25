var greet = "Good Morning";
console.log("Given string is :", greet);
console.log("Length of the given string is :", greet.length);

var charAt0 = greet.charAt(0);
console.log("Character at index 0 is :", charAt0);

var charAt8 = greet.charAt(8);
console.log("Character at index 8 is :", charAt8);

console.log("============Last Index=============");
var lastchar = greet.charAt(greet.length-1);
console.log("Character at last index is: ", lastchar);

console.log("===========Uppercase String==============");
var upperCaseString = greet.toUpperCase();
console.log("Result is :", upperCaseString);

console.log("=============Lowercase String===========");
var lowerCaseString = greet.toLowerCase();
console.log("Result is :", lowerCaseString);

console.log("==============Concat Method================");
var firstName = "Janhavi";
var lastName = "Bagul";
var concatString = firstName + lastName;
console.log("Concat string using + operator", concatString);

var result = firstName.concat(lastName);
console.log("Concat string using concat :", result);

console.log("==============Index Method==============");
var result = greet.indexOf("K");
console.log("Index of character is :", result);

console.log("===============Replace==============");
var result = greet.replace("Morning", "Afternoon");
console.log("After replace :", result);

console.log("=====================Trim=================");
var day = "       Monday          ";
var result = day.length;
console.log("Before trim", result);

var dayAfterTrim = day.trim();
var dayAfterTrimLength = dayAfterTrim.length;
console.log("After trim :", dayAfterTrimLength);
console.log(dayAfterTrim);

console.log("================Includes==============");
var result = greet.includes("Mor");
console.log(result);
var result = greet.includes("mor");
console.log(result);

console.log("=====================Slice=================");
// Perticular portion
var result = greet.slice(3,12);
console.log(result);

console.log("=================split==============");
// total no of words
var result = greet.split(" ");
console.log(result);
console.log(result.length);

var myLove = "I love only JavaScript";
var result = myLove.split(" ");
console.log(result);
console.log("Total number of words: ", result.length);

console.log("=============String template============");
console.log(` Given sentence - ${myLove} Total number of words ${result}`);
console.log(`I love only "JavaScript" `);











