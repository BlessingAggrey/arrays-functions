// Question 1
// Mutating array methods basically change the array itself instead of returning a new array with new changes. e.g array.pop(), array.push(), array.shift(), array.unshift(), array.splice() .

// Non-mutating array methods return a whole new array which has all the changes. e.g array.includes(), array.indexOf, array.slice(), array.lastIndexOf, array.concat() .

// Question 2

let languages = [ 'C#', 'Javascript', 'Ruby', 'PHP', 'Python' ];

// 2a

languages.push ( 'Kotlin' );
console.log(languages);

// 2b

languages.splice( 3,0,'Java');
console.log(languages);

// 2c

languages.shift();
console.log(languages);

// 2d

languages.unshift( 'Scala', 'Swift');
console.log(languages);

// 2e

languages.splice(5,1,'Go', 'Rust');
console.log(languages);

// Question 3
let fruit = [ 'apple', 'mango', 'banana' ];
function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;
}

console.log(changeFruit);

// Question 4

const positiveNumbers = function( [1, 2, 8, 16, 12] ) {
    let result = ('maximum ' + 'value ' + 'is ' + 16 + '.'),
    return result;
}

let maxPositiveNumber = positiveNumbers ();
console.log(maxPositiveNumber);