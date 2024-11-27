/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/
const myArr = [3,2,9,5,1,4,8]
const arrTest = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9]

function selectionSort(arr){
// we need to loop through the array
// we want to find the smallest element, but we're more concerned with its INDEX than its value
// set the minIdx to i at the beginning of each iteration

// we'll loop through the remaining values
// if we find a number that is less than our current minimum
// set that number's index as minIdx

//if, after checking the minimum number's index, we found a new minimum
// swap the new minimum with the value at i


//return the sorted array


}

// test cases
console.log(selectionSort(myArr));
console.log(selectionSort(arrTest));

