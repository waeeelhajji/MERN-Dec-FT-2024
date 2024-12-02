// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif
// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))
/**
 * Implements the merge sort algorithm to sort an array.
 *
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function mergeSort(array) {
  //!1. base case: if the array has 1 element, return the array

  //!2.find the middle index of the array
  //use Math.floor()
  //!3. split the array into left and right
  //use array.slice()
  //Logic of slice
    //console.log(animals.slice(2));
    // Expected output: Array ["camel", "duck", "elephant"]

    //console.log(animals.slice(2, 4));
    // Expected output: Array ["camel", "duck"]

  //!4. Recursively sort the left and right halves
  //invoke mergeSort for left half and put the result in sortedLeft
  //invoke merSort for right half and put the result in sortedRight
  //!5. return  Merge the two sorted halves
  // merge the two sorted halves (sortedLeft and sortedRight) into a single sorted array with invoking merge function
}

/**
 * Merges two sorted arrays into one sorted array.
 *
 * @param {number[]} left - The first sorted array.
 * @param {number[]} right - The second sorted array.
 * @returns {number[]} - The merged sorted array.
 */
function merge(left, right) {
  let result = []; // Array to store the merged result
  let leftIndex = 0; // Pointer for the left array
  let rightIndex = 0; // Pointer for the right array
  //! compare elements from both arrays and add the smallest to result
  //loop while leftIndex is less than the length of left array and rightIndex is less than length of right array
  //? if the current element in the left array is maller (left[leftIndex]), add it to the result and move the left index to the element

  //? if the current element in the right array is smaller (right[rightIndex]), add it to the result and increment the rightIndex

  //! add any remaining elements from the left array
  //loop while leftIndex is less than length of left array
  //add element in leftIndex position to result and increment leftIndex
  //! add any remaining elements from the right array
  //loop while rightIndex is less than length of right array
  //add element in rightIndex position to result and increment rightIndex
  return result; // return the merged sorted array
}

// Example usage:
const array = [88, 22, 44, 12, 99, 111, 9, 15, 49];
console.log(mergeSort(array));
