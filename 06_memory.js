// 1) In JavaScript Primative datatypes are store in Stack Memory
// 2) And the Non Primitive datatypes are storing in Heap Memory

// Stack (Primative)
let Name = "Sufyan Ali" 
let anotherName = Name // Only assign the Name variable copy to the anotherName variable

// console.log(anotherName);
anotherName = "Wasif Ali"

console.log(Name); // Name Value remain same not not effect the that value
console.log(anotherName); // Only change in anotherName variable not Name variable

// Heap (Non Primative)

let userOne = {
    email : "alikhan5252@gmail.com",
    password : 12345678
}
let userTwo = userOne
console.log(userTwo.email)

userTwo.email = "sufyanali@gmail.com"

console.log(userOne);
console.log(userTwo);

