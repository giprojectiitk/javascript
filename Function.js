// //Declaring a function

// function newFunction(Name) {
//     console.log('Their name is', Name);
// }

// let aFunction = function() {
//     console.log('Inside A function');
// };

// let isAdult = function (Name, age) {
//     if (age >= 18) {
//         console.log(Name, 'is adult because his age is', age);
//     }
//     else if (age < 18)  {
//         console.log(Name, 'is a child because his age is', age);
//     }
// }

// let newArray = [5, true, 'Snehil', isAdult];

// console.log(newArray);

// let newName1 = 'Devansh';
// let newAge1 = 22;

let newName = ['Devansh','Abhaya'];
let newAge = [22, 21, 20];

let nameGenerator = function(name, age) {
    return {
        name: name,
        age: age
    }
}

let newObject = {
    key: 'value'
};

let personArray = [
    {
        name: 'Sarvagya',
        age: 21
    },
    {
        name: 'Devansh',
        age: 23
    }
]

result['code']
 
for(let i = 0; i<2; i++) {
    console.log(personArray[i]['name'], personArray[i]['age']);
}

// person['name'] ----> person.name

// isAdult('Snehil',23);
// isAdult('Nishithaarsh',21);
// isAdult('Sample Child', 5);
// aFunction();
