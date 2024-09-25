// 1. My dream company is "your dream company name" "log on console
// 2. Create 3 variables for My Hobbies are:, "Your hobby1", "Your hobby2", "Your hobby3"
// 2.1. Log all hobbies on console on same line use the variable substitution
// 2.2. Concat your hobbies in one string and log on console using string template
// Note: Please have the function with name string Template Assig(), No arguments and no retum is required

function stringTemplateAssig(){
    console.log('My dream company is "Google"');
    var hobbyOne = "Reading";
    var hobbyTwo = "Singing";
    var hobbyThree = "Dancing";

    console.log(`My hobbies are : ${hobbyOne},${hobbyTwo},${hobbyThree}`);    
    var result = hobbyOne + hobbyTwo + hobbyThree;
    console.log(`Concat string using + operator is : ${result}`);
    // OR 
    var result1 = hobbyOne.concat(hobbyTwo,hobbyThree);
    console.log(`Concat string is : ${result1}`);   
}
stringTemplateAssig();