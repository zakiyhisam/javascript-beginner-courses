console.log('hello');
alert('zakiy hisam');
// comment function

var x ='smoothie'; //function declaration
console.log(x); //display function at console
var y = 260297;
alert(y); //pop-up alert
document.getElementById('sometext').innerHTML ='Hey there'; //pass element 'hey there' to html by using .innerHTML
var age = prompt('What is your age?');//alert function but can ask user to insert element
document.getElementById('sometext').innerHTML =age;//pass element of age to HTML by using getelementbyId

//Numbers in JS

var num1 = 5;
num1= num1 + 1; //num1++ is going to give similar results. This is called increment of number.
console.log(num1);//num1-- for decrement

console.log(num1 % 2);// % function is for remainder of the division operation

console.log(num1*2); //* is for multiplication

num1 += 10; // for increment number by selected value
console.log(num1);

/*Functions
1. create a function
2. call the function to run the function
*/

// create function
function fun(){
    alert('this is a function');
}
//call function
fun();

