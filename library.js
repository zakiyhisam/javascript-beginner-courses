//object in JS
// dictionary in Python

let student = {first: 'zakiy', last: 'hisam',age:25,height:173}; //declare object
console.log(student.first);  
student.first='hidayah'; //change the value of respective object.
console.log(student.first);

let students = {
    first: 'zakiy', 
    last: 'hisam',
    age:25,
    height:173,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

students.age++;
console.log(students.studentInfo());

