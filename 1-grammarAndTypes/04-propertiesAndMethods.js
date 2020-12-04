/*
    PROPERTIES AND METHODS

        - In most cases, properties are qualities realated to the data we're working with, and methods are actions we can perform on the data we're working with using a method causes something to happen to the data, while using a property returns information about the data

        - .property and .method()
            - methods have parenthesis behind them, properties do not 
*/

// STRING PROPERTIES 

// Length
let myName = "Marisabel";
console.log(myName.length); // counts the number of characters 

// STRING METHODS

let myDogsName= "Willie";
console.log(myDogsName.toUpperCase()); // change a string to uppercase 

let home = "my home is Fort Wayne"; 
console.log(home.includes('Fort Wayne')); // checks true or false 

// challenge: use google, find the MDN documentation for string methods. Research the string '.split()' method, and use and implement it to get an array back from a string. 

// SPLIT METHODS

let sent = 'This sentence will be split into individual parts.';
let words = sent.split (' '); //space in between quotes splits at each space 
console.log(words);

let chars =sent.split (''); // no space in between quotes splits at each individual character
console.log(chars);

//let c

let strCopy = sent.split();
console.log(strCopy);