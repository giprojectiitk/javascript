// Javascript has following types: 

// Number Type

// Can be an integer
const THREE = 3;

// Can be a decimal
const PI = 3.14159;

// '0' ---> 0

console.log('Type of PI is ',typeof(PI));
console.log('Type of THREE is ',typeof(THREE));

//Typecasting String to a number

let x = '123.1';

let hello = 'hello';

// for parseFloat
// 123.0 ---> 123
// 123.1 ---> 123.1

// parseInt is used to convert data into Number format

let y = parseInt(x); 
let z = parseFloat(x);

let intHello = parseInt(hello);

console.log('Type of x ',x,' is', typeof(x));
console.log('Type of y ',y,' is', typeof(y));
console.log('Type of z ',z,' is', typeof(z));
console.log('Type of intHello ',intHello,' is', typeof(intHello));

// NaN = 'Not a Number' ;

// Number Type: 

// all integers,
// all real numbers(decimals),
// NaN
