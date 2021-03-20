// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract } from './utils.js'; 

const test = QUnit.test;


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing function', (expect) => {

    const expected = 6;
    
    const actual = subtract(10, 4);

    expect.equal(actual, expected);

});