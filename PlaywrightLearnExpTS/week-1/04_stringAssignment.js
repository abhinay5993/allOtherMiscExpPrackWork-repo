/*
Example 1:
Given a string s consisting of words and spaces, return the length of the last word in the string.

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

function funcGetLastWordLength(impStrData)
{
    if(typeof impStrData=='string')
    {
    console.log("\nEntered input String : "+impStrData);
    let lstOfWords=impStrData.trim().split(" ");
    let strLastWord=lstOfWords[lstOfWords.length-1];
    console.log("\nLast word of input String : "+strLastWord);
    let lenOfLastWord=strLastWord.length;
    console.log("\nLength of '"+strLastWord+"' String : "+lenOfLastWord);
    return lenOfLastWord;
    }
    else
    {
       return "Please enter charecter sequence only!.";
    }
}

console.log(funcGetLastWordLength("   fly me   to   the moon  "));
console.log(funcGetLastWordLength("Hello World"));
console.log(funcGetLastWordLength("30409x,cmlldsc skdk wlldm34&3 dsd"));
console.log(funcGetLastWordLength(23423343));

/*

Example 3: 
Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.

*/

/*
Example 3:
If the given string and reverse string is same --> palindrome
Objective: If the given string is palindrome

hints:
1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false
*/
function funcPalindromeChecker(impStrData)
{
    if(typeof impStrData=='string')
    {
       impStrData=impStrData.toLowerCase();
       console.log("\nEntered input String : "+impStrData);
       let temRevStr="";
       for(let i=impStrData.length-1; i>=0; i--)
       {
        temRevStr+=impStrData[i];
       }
       console.log("Populated Reverse String : "+temRevStr);
       return (temRevStr===impStrData)?true:false;
    }
    else
    {
       return "Please enter charecter sequence only!.";
    }
}

console.log("is it a Palindrom : "+funcPalindromeChecker(1233.344));
console.log("is it a Palindrom : "+funcPalindromeChecker("111"));
console.log("is it a Palindrom : "+funcPalindromeChecker("madam"));
console.log("is it a Palindrom : "+funcPalindromeChecker(111));
console.log("is it a Palindrom : "+funcPalindromeChecker("caratLane"));
