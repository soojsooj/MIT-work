let list = "";
const names = ["Soojin", "Andy", "Fudge"];

for (let i = 0; i < names.length; i++) {
    const name = names[i]; 
    list += name + ", ";
}
console.log("list: " + list);// list: Soojin, Andy, Fudge, 

//debug practice
//infinite loop.
// let notFound = true;//can't be const bc you need to declare it again with a different value in if statement.
// let counter = 0;

// while(notFound){
//     if(counter === 5000){
//         //you never set that condition to false!
//         notFound = false; // <-so you add this!
//         console.log("found 5000");
//     } else {
//         console.log("still looking");
//     }
//     counter += 1;
// }

//Tables Exercise
//modify for loop to print out a table horizontally. how?
let multiplier = 2;

for (let i = 1; i <= 10; i++) {
     console.log(multiplier * i);   
} // this prints 2 4 6 8 ..20(vertically)

//final result!(nested forloop)
const multiplier1 = 1;

for (let i = 1; i <= 10; i++){
    let output = ""
    for(let j = 1; j <= 10; j++){
        output += j * i + " "
    }
    console.log(output)
}
//forloop objects.
const contacts = [
    { name: "amy", email: "amy@mit.edu", course: "web dev" },
    { name: "fred", email: "fred@mit.edu", course: "web dev" },
    { name: "anne", email: "anne@mit.edu", course: "web dev" },
  ];

  for (let i = 0; i < 3; i++) {
    contacts[i].id = i;// add id each object.
  }
  console.log(contacts);
//forEach practice
  contacts.forEach(element => {console.log(element) });
  //0: {name: 'amy', email: 'amy@mit.edu', course: 'web dev', id: 0}
  // 1: {name: 'fred', email: 'fred@mit.edu', course: 'web dev', id: 1}
  // 2: {name: 'anne', email: 'anne@mit.edu', course: 'web dev', id: 2}

// <<10 simple Js forloop exerceises>>
//Exercise 1)
// Get the sum of two arrays…actually the sum of all their elements.
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351 // Example output: 276 + 351 = 627 
//fail...
let arr_3 = [];
for (let i = 0; i < arr_1.length; i++) {
    let arr_3 = arr_1[i] + arr_2[i];
    console.log(arr_3);// 12 7 64 60 ... 28
}

//getting sum of numbers in arr_1
let sum = 0;
for (let i = 0; i < arr_1.length; i++) {
    sum += arr_1[i];  
}
console.log('sum of arr_1 is '+ sum);//sum of arr_1 is 276

//getting sum of numbers in arr_2
let sum2 = 0; 
for (let i = 0; i < arr_2.length; i++) {
    sum2+= arr_2[i];
}
console.log('sum of arr_2 is ', sum2);//sum of arr_2 is 351. console.log를 forloop 밖에서 해줘야함. 

//sum of arr_1 and arr_2
let sum3 = 0;
for (let i = 0; i < arr_1.length; i++) {
    sum3 = sum3 + arr_1[i] + arr_2[i]
}
console.log('sum of arr_1 and arr_2 is ', sum3);//sum of arr_1 and arr_2 is 627


//Exercise 2)
//Using a for loop print all even numbers up to and including n. Don’t include 0.
let n1 = 22; 
for (let i = 1; i <= 22; i++ ) {
    if(i % 2 === 0){
        console.log('even numbers: ', i );
    }
}// even numbers: 2 4 6 8 10 12 14 16 18 20 22


//Exercise 3)
//Using a for loop output the elements in reverse order 
//.reverse()
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = 0; i < arr.length; i++) {
    result = arr.reverse();
} 
console.log('reversed: ', result);// [true, 3, 'be', false, 'cannot', true, 9, 'what', 43]
//console.log를 밖에다 해야 함. 안 그러면 result를 9번 print함..


//Exercise 4)
// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
let arr_4   = [4, 6, 7];
let arr_5    = [8, 1, 9];

let arr_6 = [];
for (let i = 0; i < arr_4.length; i++) {
    let arr_6 = arr_4[i] + arr_5[i];
    console.log(arr_6);
}// fail bc it prints 12 7 16 in different lines. 
// .push() 
let resultInSamePosition = [];
for (let i = 0; i < arr_4.length; i++) {
    resultInSamePosition.push(arr_4[i] + arr_5[i]);
}
console.log(resultInSamePosition);// [12, 7, 16]

//.map() practice (cook!)
// is used for creating a new array from an existing one, 
//applying a function to each one of the elements of the first array.
let numbers = [5,10,15,20];
let doubledNumbers = numbers.map(item => item * 2);
console.log(doubledNumbers);// [10, 20, 30, 40]

let myName = ['soojin'];
let toUpperCaseMyName = myName.map(item => item.toUpperCase());
console.log(toUpperCaseMyName);// ['SOOJIN']


//.filter() pratice 필터해야하니까 당근 컨디션이 필요!
//similar to map, except the callback function should return true to keep the element, 
//or false otherwise. In the callback, only the element is required.
 
//get even #.
let nums = [1, 2, 3, 4, 5, 6];
let evenNums = nums.filter(item => item % 2 === 0)//condition is true? then executed.
console.log(evenNums);// [2, 4, 6]

// get all the students whose grades are greater than or equal to 90.
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
let studentGrades = students.filter(student => student.grade >= 90)
console.log(studentGrades);//{ name: 'Quincy', grade: 96 }{ name: 'Alexis', grade: 100 }{ name: 'Katie', grade: 90 }

//get items which is more expensive than $3.00
let items =[
    {item: 'milk', price: 1.99},
    {item: 'coke', price: 2.99},
    {item: 'organic orange juice', price: 3.99},
    {item: 'combucha', price: 5.00},
    {item: 'gummy', price: 3.00}
];

let expensiveItems = items.filter(g => g.price >= 3);
console.log(expensiveItems);// {item: 'organic orange juice', price: 3.99},
// {item: 'combucha', price: 5.00}, {item: 'gummy', price: 3.00}

//.reduce() practice 하나의 값으로
//reduces an array of values down to just one value. 
//it runs a reducer function

//pet counts
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
let petCounts = pets.reduce(function(obj, pet){
    if(!obj[pet]) obj[pet] = 1;
    else obj[pet]++;
    return obj;
}, {});//passes an empty object {} as the initialValue parameter
console.log(petCounts);//dog: 2, chicken: 3, cat: 1, rabbit: 1


//.some .every 이런거는 true or false 


// Exercise 5)//?????
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.
let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 
//먼저 function 만들고 
function toChangeEverySecondLetter(str1) {
    return str1.split('').map((w,i) => i % 2 ? w.toLowerCase(): w.toUpperCase()).join('');
}

console.log(toChangeEverySecondLetter(str1));


//Exercise 6)
//Check if a string contains the letter “y”. 
//Print “yes” if it does and “no” if it does not.
let str2 = "don’t know why";
for (let i = 0; i < str2.length; i++) {
    let word = str2[i];
    if(word === 'y') console.log('yes');//yes
    else console.log('no')//(13)no
}

//learn ways to Factorialize a number!
//Factorial meaning?
//factorial, in mathematics, the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point. 
//Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7.
//factorial of 0 is 1(there's no positive values less than zero.)


// Exercise 7)
// Given a number n Calculate the factorial of the number
let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24
function factorialize(num){
    if(num < 0 || num === 0 ) return 1;
    for (let i = num - 1; i >= 1; i--) {
        num = num * i;// or num *= i;
    }
    return num;
}
console.log(factorialize(n2));//24


// Exercise 8)????? 
// Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.
let pin = 0214;
for (let i = 0; i < pin.length; i++) {
    let trytimes = i
    if(!pin) {console.log('Sorry, that was wrong.')}
    else{console.log('That was correct!')}  
}
 console.log(0311);
//아아아아 모르겠다!!


// Exercise 9)
// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.
let str3 = "racecar";
let str4 = "Java";
// Example output:
// string1 palindrome?: 
// Yes 
// string2 palindrome?: 
// No 
function palindrome(){
    if()
}


// Exercise 10)
// This is a code wars kata. click here to train on “Grasshopper – Summation” on
// code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
let num1 = 2; 
let num2 = 8; 
// Example output: 
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 
