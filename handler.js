
import { add, subtract, multiply, divide
} from './utils.js';

const inputAdd1 = document.getElementById('input-ADD1');
const inputAdd2 = document.getElementById('input-ADD2');
const addOutput = document.getElementById('output-ADD');

export function handleAddClick() {
    const value1 = inputAdd1.valueAsNumber;
    const value2 = inputAdd2.valueAsNumber;
    const sum = add(value1, value2);
    addOutput.textContent = sum;
}

const inputSub1 = document.getElementById('input-SUB1');
const inputSub2 = document.getElementById('input-SUB2');
const subOutput = document.getElementById('ouput-SUB');

export function handleSubtractClick() {
    const value1 = inputSub1.valueAsNumber;
    const value2 = inputSub2.valueAsNumber;
    const difference = subtract(value1, value2);
    subOutput.textContent = difference;
}

const inputMult1 = document.getElementById('input-MULT1');
const inputMult2 = document.getElementById('input-MULT2');
const multOutput = document.getElementById('mult-output');

export function handleMultiplyClick() {
    const value1 = inputMult1.valueAsNumber;
    const value2 = inputMult2.valueAsNumber;
    const product = multiply(value1, value2);
    multOutput.textContent = product;
}

const inputDiv1 = document.getElementById('input-DIV1');
const inputDiv2 = document.getElementById('input-DIV2');
const divOutput = document.getElementById('div-output');

export function handleDivideClick() {
    const value1 = inputDiv1.valueAsNumber;
    const value2 = inputDiv2.valueAsNumber;
    const quotient = divide(value1, value2);
    divOutput.textContent = quotient;
}

