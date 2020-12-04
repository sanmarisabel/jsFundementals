/* 
    FOR IN LOOPS

        - great for iterating over values in an object. Properties in an object are what are known as enumerable properties. Enumerable simply means that the properties can be counted. 
            - for in loops iterate over an objects enumerable properties 
*/

// objects hold what are called key/value pairs 
let student = {
//  key    value          -values are assigned using a :, not an =
    name: 'Peter',
    awesome: true, 
    degree: 'JavaScript',
    week: 1
}

for (let item in student) {
    console.log(item);  // gives key 
    console.log(student[item]); // gives the value of the key 
}

let catArray = ['tabby', 'british short hair', 'burmese', 'maine coon', 'rag doll']; 

for (let cat in catArray) {
    console.log(cat); /// gives the index
    console.log(catArray[cat]) // gives the value of the index 
}

// Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name


let name = "sPoNgEbOb";
let capName; 

for (let index in name ) {
    //console.log(typeof index); //gives indexed of name variable - 0, 1, 2, etc
    if (index == 0) { 
        capName = name[index].toUpperCase();
    } else {
        capName += name [index].toLowerCase();
    }
}
console.log(capName)