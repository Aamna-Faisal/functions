//Q1..Write  program that returns your age in days ( take age as an input)..
var age = prompt("Please enter your age:");
function Days(age){
    var res = age * 365.25;
    return res;
  }
  var res = Days(age);
  console.log("Your age in days is approximately " + res + " days.");
  


//Q2..Create a function that takes a number as an argument,increments the num by +1 and returns the result.. take numas an input
var num = +prompt("enter a num")
function solve(num){
let count=0
count=num+1
return count
}
var count= solve(num);
console.log(count);


//Q3..Create a function that takes a number as an argument,increments the num by +1 and returns the result.. take numas an input
var num2 = +prompt("enter a num2")
function decrement(num2){
let count2=0
count2=num2-1
return count2
}
var count2= decrement(num2);
console.log(count2);


//Q4..Create a function that takes a number and returns suare of a number
const number = 10;
function square(number) {
    return number * number;
  }
  const result = square(number);
  console.log(result);

//Q5..Create a function that tels current time in Y-m-d format.......
function displayDate(){
 var date=new Date()
var mon= ['jan','feb','mar','apil','may','june','july','aug','sep','oct','nov','dec']
  console.log(date.getFullYear() + '-' +  mon[date.getMonth()] + '-' + date.getDate ())
}
displayDate()

//Q6..Create a function that tells current time from date object in H:I:S format..

//how to solve??


 

