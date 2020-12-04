/*
    FUNCTIONS 

        - functions are a chunck of code that perform a set or set of actions when called (or invoked)
        functions are reusable - we can call them as many times as we want and they can take in different sets of data 
*/

// function declaration 
function hi() {
    console.log('hello!');
}

hi(); // function must be called by it's name if we want the funtion to run 

//-----------------------------------------
function num() {
    for (let i = 0; i<11;i++) {
        if (i %2 == 0) {
            console.log(i)
            console.log('the number is even')
            } else {
            console.log(i)
            console.log('the number is odd')
            }
        }
      } 
num(); 