/*
    PARAMETERS

    - parameters are place holders for data that we pass into the function when the function is called 

                (1)
    function hello(name) {
        console.log(`hello ${name}`);
                            (20)
    }

             (3)
    hello('Marisabel');

    1. this is the parameter that the function is holding. This is just a placeholder.
    2. by calling the parameter name, it will print the value given to 'name' when the function was called 
    3. this is the data that we're passing into the function and that the paraneter 'name' will then hold.

    - parameters can be named anything, just like a variable 
*/
//          let name = 'Marisabel'
function hello(name) {
    console.log(`hello ${name}`);
}

hello('Marisabel'); // when we call the function is where we need to pass in the data that we want to assign to the parameter 

// -------------------------------------------------------------
//                 ticket = 'cheese pizza'
function marisabel(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`)
}

marisabel(`cheese pizza`)  // if you hace no parameter (placehorlder), then your function will not be able to accept any data 

//-------------------------------------------------------------
function counter(number) {
    console.log(number); 
}

for (let i = 0; i <= 10; i++) {
    // console.log(i);
    counter(i) 
}

// Challenge: write a function that holds 2 parameters. One parameter is for a first name, the other is for a last name. Inside of the function, reference the two parameters in a console.log statement that prints off your full name

function name(first, last) {
    let myFullName = first + ' ' + last; 
    console.log(`Hello my name is ${myFullName}`);

}
name('marisabel', 'sanchez');