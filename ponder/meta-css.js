// variables vs constants

const PI = 3.14;

let radius; // you can declare a variable without initializing a value
radius = 3;

let area = radius * radius * PI;

console.log(area);

radius = 20;

area = radius * radius * PI;

console.log(area);

//type coersion

const one = 1;
const two = "2";

let result = one * two;
console.log(result); //Javascript dynamically changed the data type to make the math work

result = one + two;
console.log(result); //Javascript concatinated the string and the number instead of making them both numbers

// scope

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course) //works just fine, course is global
    console.log(student) //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block