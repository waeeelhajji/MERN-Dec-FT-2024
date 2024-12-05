/* https://leetcode.com/problems
    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].

    example 1
    given: [2, 11, 7, 15]
    target: 9
    output: [0,2]

    example 2
    given: [3,2,4]
    target: 6
    output: [1,2]

    example 3
    given: [3,3]
    target: 6
    output: [0,1]
*/


// 👉  take a few mins to write the pseudocode first

function twoSums(arr, target) {
    //intialize two indices, idx1 and idx2
    //idx1 starts from the first element and idx2 starts from the second element

    //initialize an empty array to store the result

    //start a loop, while idx1 doesn't reach the length of the array
        //check if the sum of the elements at idx1 and idx2 equals to the target
            // store the indices in the output array and return it
        //otherwise if idx2 reaches the end of the array, increment idx1 and set idx2 to next element after idx1
        //otherwise, just move idx2 to the next element

    //return an empty array  
}


console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]










