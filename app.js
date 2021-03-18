// name all my dom elements with const vars

const inputAdd1 = document.getElementById('input-ADD1');
const inputAdd2 = document.getElementById('input-ADD2');
const addButton = document.getElementById('button-ADD');
const addOutput = document.getElementById('output-ADD');

// Validate:
// console.log(inputAdd1, inputAdd2, addButton, addOutput);

// create function for click

addButton.addEventListener('click', () => {
    // add const for .values
const value1 = inputAdd1.valueAsNumber;
const value2 = inputAdd2.valueAsNumber;
    // Validate:
    // console.log(value1, value2);

    //add values together
const sum = value1 + value2;

    //create place for SUM output 
addOutput.textContent = sum;
    // Validate:
    // console.log(sum);
});

//name all dom elements with const 

const inputSub1 = document.getElementById('input-SUB1');
const inputSub2 = document.getElementById('input-SUB2');
const subButton = document.getElementById('button-SUB');
const subOutput = document.getElementById('ouput-SUB');

//Validate:
// console.log(inputSub1, inputSub2, subButton, subOutput);

//create function for click
subButton.addEventListener('click', () => {
    //make const for values
const value1 = inputSub1.valueAsNumber;
const value2 = inputSub2.valueAsNumber;
    //Validate:
    // console.log(value1, value2);

    //subtract values 
const difference = value1 - value2;

    //display solution
subOutput.textContent = difference;
});


const inputMult1 = document.getElementById('input-MULT1');
const inputMult2 = document.getElementById('input-MULT2');
const multButton = document.getElementById('mult-button');
const multOutput = document.getElementById('mult-output');

multButton.addEventListener('click', () => {
    const value1 = inputMult1.valueAsNumber;
    const value2 = inputMult2.valueAsNumber;

const product = value1 * value2;

multOutput.textContent = product;
});


const inputDiv1 = document.getElementById('input-DIV1');
const inputDiv2 = document.getElementById('input-DIV2');
const divButton = document.getElementById('div-button');
const divOutput = document.getElementById('div-output');

divButton.addEventListener('click', () => {
    const value1 = inputDiv1.valueAsNumber;
    const value2 = inputDiv2.valueAsNumber;

const quotient = value1 / value2;

divOutput.textContent = quotient;
});
