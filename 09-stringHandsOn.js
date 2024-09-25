// Given a String Hey
// you are doing good, keep it up
// Steps: please create a function 'stringHandson' with no arguments, no return value, ple don't forget to invoke this function

function stringHandsOn(){
    // 1. Print the string as it is on console
    var string = "   Hey you are doing good,keep it up   ";
    // 2. Calculate length of the String
    console.log(`Given String is : ${string} length of string is ${string.length}`);
    // 3. Remove the leading and trailing extra spaces and log string on console with it's length   
    var result = string.trim();
    console.log(`After trim : ${result}`);
    // 4. Print the total number extra spaces count that is removed in step 2. 5. Print the first and last character on the same line after trim() Le after step 3
    console.log(`Given string length is : ${string.length}`);
    console.log(`After trim length is :${result.length}`);
    // 5. Print the first and last character on the same line after trim() Le after step 3
    var firstChar = result.charAt(0);
    var lastChar = result.charAt(result.length-1)
    console.log(`First character after trim is ${firstChar} and last character is ${lastChar}`);
    // 6. Print the count of total words available in the string after step 3
    var totWords = result.split(" ");
    console.log(`Total words available after trim are ${totWords.length}`);
    // 7. Print the index of word "good" from the given string
    var index = result.indexOf("good");
    console.log(`index of word good is ${index}`);
    // 8 Print the substring starting from index 22, using substring()
    var substring = result.substring(22);
    console.log(`the substring starting from index 22 is ${substring}`);
     // 9. Check, is string ends with word "up" after step 3?
     var ends = result.endsWith("up");
     console.log(`is string ends with word "up" after step 3? ${ends}`);
    //  10. Check is string starts with word "Hey" after trimming Le after step 3 output string value
    var starts = result.startsWith("Hey");
    console.log(`is string starts with word "Hey" after trimming and ans is ${starts}`);   
}  
stringHandsOn();