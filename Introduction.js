let x = 0;

let Name = 'Tejas';
let age = 22;

console.log(age >= 18);

if (typeof(age) === Number && age >= 18) {
    console.log(Name, 'is adult because his age is', age);
}
else if (typeof(age) === Number && age < 18)  {
    console.log(Name, 'is a child because his age is', age);
}
else {
    console.log(Name, 'entered wrongly');
}

console.log('Type of x is ', typeof(x));
console.log('Type of z is ', typeof(z)); // z was a string

z = 6;

z = undefined;

let answer = x + z;

console.log('After assigning 6, type of z is ', typeof(p));

