console.log("================Function with no argument and no return value=========================");
function show(){
    console.log("Inside show function");
}
show(); //Function call Or invoke


console.log("=================Function with argument and no return value============================");
function multiply(n1,n2){
    console.log("Given numbers:", n1,n2);
    var result = n1 * n2;
    console.log("Multiplication is :", result);    
}
multiply(6,5);
multiply(100,300);
multiply(34.6,67.3);
multiply(40);


console.log("=================Function with no argument and return value============================");
function test(){
    console.log("Inside demo function...");
    return "Good Morning"; 
}
var result = test();
console.log(result);



function square(num){
    console.log("Given number is :", num);
    var result = num * num;
    return result;
}
var returnValue = square(3);
console.log("Square is :", returnValue);

var returnValue = square(15);
console.log("Square is :", returnValue);

var returnValue = square(56);
console.log("Square is :", returnValue);