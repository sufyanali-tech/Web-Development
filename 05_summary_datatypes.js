// Two types of datatypes in JavaScript

// Primative datatypes 

// 7 : types String , Number , Boolean , BigInt , Symbol , null , undefined

const String = "Sufyan Ali"
const Number = 1234
const boolean = true

// Symbol makes variables unique 

const id = Symbol(1234)
const anotherId = Symbol(1234)

console.log(id === anotherId);

let temperature = null // null
let name // undefined


// Non Primative (Reference)

// Array , Object , Function

// Array

let names = ["Sufyan Ali", "Wasif Mehmood", "Hamza"]

console.log(typeof names); // but their return type is object
console.log(names); 

// Object

let namesAndClass = {
    studentName : "Sufyan Ali",
    class : 10
}

console.log(typeof namesAndClass); // Object and their return type is also object
console.log(namesAndClass);

// Function

let randomFunction = function () {
    
    console.log("Hello World");
    
}

console.log(typeof randomFunction); // function also called function object
console.log(randomFunction());



