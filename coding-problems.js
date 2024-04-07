/* Write a function that takes in an array of numbers. The function should return True if any two 
numberss in list sum to 0, and false otherwise.
 */

function addToZero(arr) {
    let numObj = {}
    for (let i = 0; i < arr.length; i++){   
        if (!numObj.hasOwnProperty(Math.abs(arr[i]))) {
            numObj[arr[i]] = arr[i]
        } else {
            return true
        }
    }
    return false
}
console.log(addToZero([1, 2, 3]));// -> False
console.log(addToZero([1, 2, 3, -2]));// -> True

// Time Complexity : O(n)
// Space complexity : O(n)


/* Write a function that takes in a single word, as a string. It should return True if that word contains only 
unique characters. Return False otherwise.
 */

function hasUniqueChars(str) {
    let word=[]
    for (let i = 0; i < str.length; i++){   
        if (!word.includes(str[i].toLowerCase())) {
            word.push(str[i]) 
        } else {
            return false
        }
    }
    return true
}

console.log(hasUniqueChars("Monday"));// -> True
console.log(hasUniqueChars("Moonday"));// -> False

// Time Complexity : O(n)
// Space complexity : O(n)

/* A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the 
lazy dog.”Write a function to check a sentence to see if it is a pangram or not.
*/
function isPangram(str) {
    let alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split("")
    for (let i = 0; i < alphabetArr.length; i++){
        if (!str.includes(alphabetArr[i]))
            return false
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!")); ;// -> True
console.log(isPangram("I like cats, but not mice"));// -> False 

// Time Complexity : O(n)
// Space complexity : O(1)

/* Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
 */
function findLongestWord(strArr) {
    let len = 0
    for (i = 0; i < strArr.length; i++){
        if (len < strArr[i].length)
            len=strArr[i].length
    }
    return len
}
console.log(findLongestWord(["hello", "helloooo", "hi"])); // -> 8

// Time Complexity : O(n)
// Space complexity : O(1)

