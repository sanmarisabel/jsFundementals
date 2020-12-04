/*
    FOR IN LOOPS

        - where for in loops look at enumerable or countable properties 
            - for of loops look at iterable properties that we can parse through with numbers or indices 

        - for in loops: better suited for objects 
        - for of loops: better suited for arrays 
*/
//using a for of loop with an object with will throw an error since for loops look at iterable properties and objects have what are known as enumerable, or countable, properties 

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    weeks: one,
}

for (let item of student) {
    console.log(item);
}

let catArray = ['tabby', 'british short hair', 'burmese', 'maine coon', 'rag doll']; 

for (let cat of catArray) {
    console.log(cat);  
}

for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i]);
}