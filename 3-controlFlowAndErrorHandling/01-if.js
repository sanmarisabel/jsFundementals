/*

- falsy value: a value that is considered false when encountered in a Boolean context (Boolean's are data type that can only be "true" or "false")

    - there are six cases of flasy values in JavaScript:
        1. false 
        2. 0
        3. "", ', ``
        4. null
        5. undefined
        6. NaN (not a number)

    - This means when JavaScript is expecting a boolean and is given one of these values, it will always evaluate to "falsy"

*/

let isOn = true; 

// Read as, if the variable "isOn" is EQUAL to true, run the body
if (isOn == true) {
    // this is the body of the if statement
    console.log('The light is on!');
}

// Read as, if "isOn" is true, run the body
if (isOn) {
        console.log('The light is still on');
}

let isOff = false; 

// Read as, if "isOFF" is Equal to false, run the body
if (isOff == false) {
    console.log("The light is off now");
}

let weather = 65;

if (weather < 70) {
    console.log('Wear a jacket')
} 