/*
Task-1 Javascript File Name: 01_learn.js
    Objective: Learn Primitive Data Types

    Create the following variables using var and check their typeOf
 
    a) firstName
    b) companyName
    c) mobileNumber
    d) isAutomation
    e) hasPlaywright (do not assign)
 
    print and confirm the values and data types

 */

var firstName = "Test-Automation";
console.log(firstName);
var companyName = "caratLane.com";
console.log(companyName);
var mobileNumber = 9566089853;
console.log(mobileNumber);
var isAutomation = true;
console.log(isAutomation);
var hasPlaywright;
console.log(hasPlaywright);
withoutVar=NaN;
console.log(withoutVar);
withoutVarNumDat=3434.34;
console.log(withoutVarNumDat);
withoutVarBool=false;
console.log(withoutVarBool);
withoutVarNull=null;
console.log(withoutVarNull);

let listItems=[firstName,companyName,mobileNumber,isAutomation,hasPlaywright,withoutVar,withoutVarNumDat,withoutVarBool,withoutVarNull];
for(let i=0;i<listItems.length;i++)
{
console.log("\nItem vlaue - '"+listItems[i]+"' Type is : "+typeof listItems[i]);
} 

 /* 
    Objective: Learn var vs let vs const and understand variable scoping

    Declare a const name as browserName (global)
    Assign value as "Chrome"
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works
    - function how to write and how to call
    - basic if condition and block variable
    - let vs var

    */

const browserName="Chrome";

function getBrowserVersion(browserName) {
    var browserVersion = "v1.0"; 
    let runEngine="Default JS";
    if (browserName==="Chrome"){
        let browserVersion="v21.011.110";
        let runEngine="V8";
        console.log("\nBrowser Version : "+browserVersion+" JS engine name : "+runEngine);
    }else{
        browserName="JS-Light";
        console.log("\nDefualt Runtime engine : "+runEngine);
        console.log("\nBrowser not '"+browserName+"' supported!!. with version of : "+browserVersion+" .");
    }
    console.log("\nOutside block browser name : '"+browserName+"' with version of : "+browserVersion);
}

getBrowserVersion("firefox");
getBrowserVersion("Chrome");
