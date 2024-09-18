// 1. Write any two functions with no arguments and no return type as per your choice & log message on console
function demo1(){
    console.log("Good morning everyone");
}
demo1();

function demo2(){
    console.log("We all are learning js");
}
demo2();


// 2. Write a function personalDetails with arguments namely firstName, lastName, collegeName arguments and log on console inside a function. Don't forget to call it please
function personalDetails(firstName,lastName,collegeName){
    console.log("My First namwe is :",firstName);
    console.log("My lastname is :", lastName);
    console.log("My college Name is :", collegeName);
}
personalDetails("Prince","Jain","MET");


// 3. WAF with 3 parameters or arguments and it should log the addition.
// 3.1. Function name: addThreeValues()
// 3.2. Call the function for values 10.23, 600, 40
// 3.3. Invoke the same function for values "Hello"," Good"," Morning"
function addThreeValues(n1,n2,n3){
    console.log("Given numbers are :",n1,n2,n3);
    var result = n1+n2+n3;
    console.log("Addition is :", result);
}
addThreeValues(40.50,67,34);
addThreeValues("Hello","Good","Morning");

