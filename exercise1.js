/* Create a function that takes a name and says hello 
followed by your name

eg. 
name: Zakiy
return : Hello Zakiy

*/

function greeting(){
    var name =prompt('What is your name?');
    alert('Hello '+name+'!');
    var result= 'Hello '+name; //string concatenation
    console.log(result);
}
//greeting();

//How do argument work in functions?

//add 2 number together in a fucntion

function sumNumbers(num1,num2){
    var result = num1 + num2;
    console.log(result);
}

//sumNumbers(10,10); //also can use string eg. ('10','10') will result to 1010.

//dependent function

function greeting(yourName){
    
    var result= 'Hello '+yourName; //string concatenation
    console.log(result);
}
var name =prompt('What is your name?');
greeting(name);