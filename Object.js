let obj = require('./SampleJSONObject.json');

let temporaryOrderId = 0;

for(let i = 0; i<5;i++) {
    temporaryOrderId = obj['result']['data'][i]['batch'];
    console.log(temporaryOrderId);
}

// an array of objects inside which each object is an order

// Number 
// String
// Array
// Object
// Function
// Boolean
// null
// undefined

// if else
// for loop
// while loop
