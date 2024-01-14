/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

function sumOfValues(numX)
{
   if(typeof numX=='number')
   {
     let sum=0.0;
     for(let i=1;i<=numX;i++)
     {
     console.log(i);
     sum +=i;
     }
     return sum;
   }
   else
   {
      return "Please enter numeric digits only.";
   }
}

let nthTerm=5;
console.log("\nSum of Value : "+sumOfValues(nthTerm));
nthTerm="test";
console.log("\nSum of Value : "+sumOfValues(nthTerm));
nthTerm=10;
console.log("\nSum of Value : "+sumOfValues(nthTerm));