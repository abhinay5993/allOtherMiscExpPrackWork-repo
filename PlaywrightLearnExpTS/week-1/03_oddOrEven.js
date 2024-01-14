/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/

function checkOddOrEven(numX)
{
   if(typeof numX=='number')
   {
      if(numX%2==0)
      {
      return "the number is even";
      }
      else
      {
      return "the number is odd";
      }
   }
   else
   {
      return "Please enter numeric digits only.";
   }
}

var result = checkOddOrEven(50);
console.log("\nResult is : "+result);
var result = checkOddOrEven(-37.304);
console.log("\nResult is : "+result);
var result = checkOddOrEven("Hello str");
console.log("\nResult is : "+result);
