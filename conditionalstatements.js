//if else condition

// && AND
// || OR

var age = prompt('what is your age?');

if ((age>=15) && (age<=30)){
    status = 'you are young';
    console.log(status);
}
else{
    status = 'you are not my type';
    console.log(status);
}

//Switch statements
//differentiate between weekday vs. weekend
//0 sunday
//6 saturday
//print out weekday

switch (15){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text);