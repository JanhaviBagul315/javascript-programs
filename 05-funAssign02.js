// Write a function 'bankDetails' with 4 arguments bankName, accountNum, location, pinCode
// 1.1. Log these values on same line on console as it is with meaningful message
// 1.2. Invoke function as
// 1.2.1. bankDetails("CITI Bank", 3456782345, 'Pune', 431202);
// 1.2.2. bankDetails("Axis Bank", 7856782345, Mumbai, 441202);
// 1.2.3. bankDetails("HDFC Bank", 8956782345, 'Pune', 631202, "Open");

function bankDetails(bankName, accountNum, location, pinCode){
    console.log("Bank name is :",bankName,"Account number is :",accountNum,"Location is :",location,"Pincode is :",pinCode);   
}
bankDetails("CITI Bank", 3456782345, 'Pune', 431202);
bankDetails("Axis Bank", 7856782345, 'Mumbai', 441202);
bankDetails("HDFC Bank", 8956782345, 'Pune', 631202, "Open");