/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let func2Test = function2test();

    if (Array.isArray(expected) && Array.isArray(func2Test)) {
        if (compareTwoArray(expected, func2Test)) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + func2Test;
        }
    }
    else {
        if (expected === function2test()) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + function2test();
        }
        ;
    }
}

function compareTwoArray(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

    if (arr1.length === arr2.length) {
        for (let i=0; i<arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
    }

    return true;
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
    ;
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
    return maxOfThree(5, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, function () {
    return maxOfThree(55, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, function () {
    return maxOfThree(55, 4, 44);
}));

/* isVowel */
function isVowel(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Use lambda and arrow function
    return !!vowels.find(vowel => vowel === s);

    /* solution 1
    for (let i=0; i<vowels.length; i++) {
        if (vowels[i] === s) return true;
     }

    return false;
    */

    /* solution 2
    const result = vowels.find(function(vowel, i, array) {
        return vowel === s;
    });

    return !!result;
    */
}
console.log("Expected output of isVowel is true " + myFunctionTest(true, function() {
    return isVowel('a');
}))
console.log("Expected output of isVowel is false " + myFunctionTest(true, function() {
    return isVowel('c');
}))


/* sum */
function sum(arr) {
    return arr.reduce((a, b) => a + b);
}
console.log("Expeected output of sum is 10 " + myFunctionTest(10, function() {
    return sum([1, 2, 3, 4]);
}))


/* multiply */
function multiply(arr) {
    return arr.reduce((a, b) => a * b);
}
console.log("Expeected output of multiply is 24 " + myFunctionTest(24, function() {
    return multiply([1, 2, 3, 4]);
}))


/* reverse */
function reverse(str) {
    /* solution 1
    let reversed = '';

    for (let i=str.length-1; i>=0; i--) {
        reversed += str[i];
    }

    return reversed;
    */

    /* solution 2
    return str.split('').reduce((rev, char) => char + rev);
     */

    return str.split('').reverse().join('');
}
console.log("Expeected output of reverse is ratset gaj " + myFunctionTest("ratset gaj", function() {
    return reverse("jag testar");
}))


/* findLongestWord */
function findLongestWord(arr) {
    return arr.map(word => word.length)
              .reduce((a, b) => a > b ? a : b);

    /* solution 1
    const result = arr.reduce(function(word1, word2, i, array) {
        return word1.length > word2.length ? word1 : word2;
    });

    return result.length;
    */
}
console.log("Expeected output of findLongestWord is 10 " + myFunctionTest(10, function() {
    return findLongestWord(['car', 'motorcycle', 'bike']);
}))


/* filterLongWords */
function filterLongWords(arr, i) {
    return arr.filter(word => word.length > i);
}
console.log("Expeected output of filterLongWords is avocado " + myFunctionTest(['avocado'], function() {
    return filterLongWords(['mango', 'apple', 'avocado'], 6);
}))
