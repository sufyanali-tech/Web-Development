// Converting the Number to String

let somenumber = 1234

console.log(typeof somenumber);

somenumber = String(somenumber)

console.log(somenumber);
console.log(typeof somenumber);

// Conversion Boolean datatype to String datatype

let someBooleanValue = false

someBooleanValue = String(someBooleanValue)

console.log(typeof someBooleanValue);
console.log(someBooleanValue);

// Conversion of String datatype to Number datatype 

let someString = "1234@"

someString = Number(someString)

console.log(typeof someString);
console.log(someString);

// Conversion of Boolean datatype to Number datatype

let someBoolean = false

someBoolean = Number(someBoolean)

console.log(typeof someBoolean);
console.log(someBoolean)

// Coversion of Number datatype to Boolean datatype

let someNumber = 0

someNumber = Boolean(someNumber)

console.log(typeof someNumber);
console.log(someNumber);

// Coversion of String datatype to Boolean datatype

let someStringValue = ""

someStringValue = Boolean(someStringValue)

console.log(typeof someStringValue);
console.log(someStringValue);

// String + Number Addition in JavaScript 

console.log(2 + 2 + "3");
console.log("3" + 4 + 5);
console.log("3" + 4 + 9 + 10);
console.log(10 + 9 + 8 + "45" + "34");
console.log(10 + 1 + "80" + 3);

// Prefix and Postfix in JavaScript

let number = 100

number++

console.log(number);

let anotherNumber = 100

++anotherNumber

console.log(anotherNumber); // Same Same but different internally

// Prefix example

let prefixValue = 3

const storeThePrefixValue = prefixValue++

console.log(`Prefix Value : ${storeThePrefixValue} , After the Prefix Value : ${prefixValue}`); // Output 3 , 4

// Postfix Example

let postfixValue = 3

const storeThePostfixValue = ++postfixValue

console.log(`Prefix Value : ${storeThePostfixValue} , After the Prefix Value : ${postfixValue}`); // Output 4 , 4