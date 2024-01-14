/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result

*/

function calculateGrade(marks)
{
   if(typeof marks=='number')
   {
     switch(true)
     {
      case marks>=70:
           return "1st Devision";
      break;
      case marks>=50 && marks<=69:
           return "2nd Devision";
      break;
      case marks>=30 && marks<=49:
         return "3rd Devision";
      break;
      default:
         return "Failed!!";
     }
   }
   else
   {
      return "Please enter numeric digits only.";
   }
}

let marks=45.45;
console.log(`Entered marks : ${marks}`);
console.log(calculateGrade(marks));