import { handleAddClick, handleDivideClick, handleMultiplyClick, handleSubtractClick 
} from './handler.js';


const addButton = document.getElementById('button-ADD');
const subButton = document.getElementById('button-SUB');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');


addButton.addEventListener('click', handleAddClick);
subButton.addEventListener('click', handleSubtractClick);
multButton.addEventListener('click', handleMultiplyClick);
divButton.addEventListener('click', handleDivideClick);
