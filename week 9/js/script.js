alert("your website is hacked")
console.log("please call  for help");
console.log("what is your name");
console.log("my name is pukar karki");
console.log(document.getElementById("paragraph").innerHTML);
document.getElementById("paragraph").innerHTML="HACKED!!!";
// document.getElementById("paragraph").style.color="red";
// document.getElementById("paragraph").style.background="green";
document.getElementById("paragraph").style.cssText="color:red;background:green";

var a = 1;
var b = "pukar";

console.log(typeof a);
console.log(typeof b);
console.log(typeof document);

var age = 10;
age = 20;
let age1 = 20;
age1 = 30;
const age2 = 30;
// age2 = 40;

console.log(age);
console.log(age1);
console.log(age2);

console.log(prompt("enter your name:"));

document.getElementById("message").innerHTML="HEllo my name is :"+b;