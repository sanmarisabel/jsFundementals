/*
    - arrays are containers that hold a list of items
        - arrays can hold nnumerous data types
    - denoted by the []
*/

let list = ['orange', 'banana', 'apple'];

console.log(list[1]);

/*
    - when we call an array, we can append square brackets onto the end of our array with the index number that we want to reference.
    - javascript starts counting at 0
*/

let students = ['Amruta', 'Marco', 'Nick', 'Carolina', 4, true, ['Adam', 'Alexandria', 'Alexia', 'Allyyson']]

console.log(typeof students);   // object
console.log(students instanceof Array);  // the instance of operator is used to check the type of an object at run time. Will return a true or false value 
console.log(students[2]); // Nick
console.log(students[1]); // Marco 

// CHALLENGE: dive into the nested array in the students array, and pull out on of the values 

console.log(students[6][2]) // Alexia

let name = students[6][1]
console.log(name)