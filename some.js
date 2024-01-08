
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