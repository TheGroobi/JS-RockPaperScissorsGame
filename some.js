
// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
/* 111111111 */
// function is_array(input) {
//     if (Array.isArray(input)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // console.log(is_array('w3resource'));
// // console.log(is_array([1, 2, 4, 0]));


// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
function maxTotal(array) {
    const numbersSort = (a,b) => a - b;//sort the numbers for the largest
    return array //slice and reduce them
        .sort(numbersSort)
        .slice(5)
        .reduce((acc, val) => acc + val);
};
// console.log(maxTotal(numbers));
// console.clear


// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function. 
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    return [...Array(num + 1)
        .keys()]
        .slice(1)
        .reduce(
            (acc, val) => acc + val);
        };
// console.log(addUp(4)) 
// console.clear

//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function sumPolygon(n) {
    if(n >= 3) {
        return (n - 2) * 180
	}
};
// console.log(sumPolygon(3));
// console.clear

//Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
    return arr[0];
}
// console.log(getFirstValue([142,2,3,4]))

//Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
	const array = Array.from(a)

}

// console.log(giveMeSomething())
// is it a pangram function
function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return alphabet.every(x => string
        .toLowerCase()
        .includes(x)
        );
}
// console.log(isPangram('lmnopqrstuvwxyzadsasgasg'));


// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.

function addBinary(a,b) {
    const sum =  a + b;
    //if the number is ++ then you add a 1 in binary
    
}

