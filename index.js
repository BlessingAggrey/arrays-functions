// Question 1
// Mutating array methods basically change the array itself instead of returning a new array with new changes. e.g array.pop(), array.push(), array.shift(), array.unshift(), array.splice() .

// Non-mutating array methods return a whole new array which has all the changes. e.g array.includes(), array.indexOf, array.slice(), array.lastIndexOf, array.concat() .

// Question 2

let languages = [ 'C#', 'Javascript', 'Ruby', 'PHP', 'Python' ];

// 2a

languages.push ( 'Kotlin' );
console.log(languages);