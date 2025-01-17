/*
1. Create a function named `checkNumberType` that takes a number as a parameter.

2. Use `if` to check if the number is greater than 0.
   Use `else if` to check if the number is less than 0.
   Use `else` to handle the case when the number is not greater than 0 or less than 0 
   (i.e., when it is zero).

3. Return the corresponding string value for each case.

4. Declare and initialize the variable

5. Call the function and print the result

*/

function checkNumberType(numX)
{
   if(typeof numX=='number')
   {
      if(numX>0)
      {
      return "the number is greater than 0";
      }
      else if(numX<0)
      {
      return "the number is less than 0";
      }
      else
      {
      return "the number is not greater than 0 or less than 0";
      }
   }
   else
   {
      return "Please enter numeric digits only.";
   }
}

var result = checkNumberType(50);
console.log("\nResult is : "+result);
var result = checkNumberType(-344.304);
console.log("\nResult is : "+result);
var result = checkNumberType("Hello str");
console.log("\nResult is : "+result);
