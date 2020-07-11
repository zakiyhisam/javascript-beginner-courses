//Data Types
let yourAge = 18; //number
let yourName = 'zakiy'; //string
let name = {first: 'hidayah', last: 'azmi'}; //object or library
let truth = false; // boolean (1,0)
let groceries = ['apple','kurma','cendol']; //array
let random; //undefined data
let nothing = null; // value = null

//strings in JS (common methods)

let fruit = 'banana';
let moreFruits = 'banana\nkurma'; // the \n is for new line

console.log(fruit.length); // .length shows the number of character in fruit data.
console.log(fruit.indexOf('na')); //this function find the character of 'd' in the data and display at what length is found start from 0.
console.log(fruit.slice(2,6)); //slice function take character in data (start char,end char).
console.log(fruit.replace('nan','123'));// replace character in data (original data,replalced data). can put more data more than original data.
console.log(fruit.toLocaleUpperCase()); //change all character to uppercase
console.log(fruit.toLowerCase());//change character to lowercase.
console.log(fruit.charAt(2)); //display char a 2 also can use [2].
console.log(fruit.split(''));//change char in data in a split array.
let food = 'ayam,itik,kambing';
console.log(food.split(','));//split char by coma in array.

// Array

let fruits= ['banana','apple','orange','strawberry']; //line 28,29 shows 2 ways to declare array function.
fruits = new Array('kurma','durian','rambutan','jambu');
console.log(fruits); //display array value
console.log(fruits[2]); //display [2] character in fruits array. keep in mind it start with 0,1,2...
fruits[1]= 'mangga'; //change [1] character to other character.
console.log(fruits);

//displaying array fucntion by list using for loop.

for (let i=0;i< fruits.length;i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string\n',fruits.toString()); //change array fucntion to string function.
console.log(fruits.join('')); //merge array character to 1 character
console.log(fruits.join('*')); //merge array but split * in between char
//console.log(fruits.pop(''));//display last element in array(pop function is to remove last element).
console.log(fruits.pop(),fruits);
console.log(fruits.push('cempedak'),fruits);//line 47,48 is two different ways to add element to array.
fruits[4]='delima';
console.log(fruits);
fruits.shift(); // remove first array's element.
fruits.unshift('anggur');
console.log(fruits); // add first element in array.
let vege = ['sawi','bayam','labu'];
let allGroceries = fruits.concat(vege); // merge two array
console.log(allGroceries);
console.log(allGroceries.slice(1,5)); //take char between 1-5.
console.log(allGroceries.reverse()); //reverse the order of character in array
console.log(allGroceries.sort()); //sort array element by alphebetical order

let someNumbers =[5,10,2,3,897,15,6];
console.log(someNumbers.sort());
console.log(someNumbers.sort(function(a,b){return a-b})); //sort array in accending order
console.log(someNumbers.sort(function(a,b){return b-a})); //sort array in decending order

let emptyArray = new Array();
for (let x = 0; x< 10; x++){
    emptyArray.push(x);
}
console.log(emptyArray);

