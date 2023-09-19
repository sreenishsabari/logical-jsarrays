"use strict";

// 1. Write a JavaScript program to find the sum of all the numbers in an array.
const numArr = [1, 2, 3, 4, 5];
const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(`The answer for 1st problem - ${sum(numArr)}`);

// 2. Write a JavaScript program to find the largest and smallest elements in an array.
const bigAndSmall = function (arr) {
  let small = arr[0];
  let large = arr[0];
  for (let i = 1; i < arr.length; i++) {
    small = small > arr[i] ? arr[i] : small;
    large = large < arr[i] ? arr[i] : large;
  }
  return [small, large];
};
const [smallNo, largeNo] = bigAndSmall(numArr);
console.log(
  `The answer for 2nd problem smaller no is ${smallNo} and larger no is ${largeNo}`
);

// 3. Write a JavaScript program to check if a given number is positive, negative, or zero.
const checkNo = function (num) {
  return num > 0
    ? `${num} is a positive number`
    : num < 0
    ? `${num} is a negative number`
    : `${num} is a zero`;
};

console.log(`The Answer for 3rd problem - ${checkNo(1)}`);

// 4. Write a JavaScript program to check if a given string, is a palindrome.
const str = "racecar";

const checkPalindrome = function (str) {
  let strArr = str.split("");
  strArr = strArr.reverse();
  let revStr = strArr.join("");
  return str === revStr
    ? `${str} it is a palindrome`
    : `${str} is not a palindrome`;
};
console.log(`Answer for 4th problem  ${checkPalindrome(str)}`);

// 5. Write a JavaScript program to reverse a string without using the built-in reverse () method.

const reverseString = function (str) {
  let strArr = str.split("");
  let revStr = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    revStr += strArr[i];
  }
  return revStr;
};

console.log(`Answer for 5th problem - ${reverseString("welcome")}`);

// 6. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
const productOfSign = function (numOne, numTwo, numThree) {
  let product = numOne * numTwo * numThree;
  if (product < 0) {
    alert(`The sign is -`);
  } else {
    alert(`The sign is +`);
  }
};
productOfSign(3, -7, 2);

// 7. Write a JavaScript program to remove items from a drop-down list.
const selectedElement = document.getElementById("colorSelect");

const removecolor = function () {
  console.log(selectedElement.options);
  selectedElement.remove(selectedElement.selectedIndex);
};

// 8. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.

const numOne = 0,
  numTwo = -1,
  numThree = 4;

const sortNumbers = function (numOne, numTwo, numThree) {
  let arr = [];
  if (numOne > numTwo && numOne > numThree) {
    arr.push(numOne);
    numThree > numTwo ? arr.push(numThree, numTwo) : arr.push(numTwo, numThree);
  } else if (numTwo > numOne && numTwo > numThree) {
    arr.push(numTwo);
    numOne > numTwo ? arr.push(numOne, numTwo) : arr.push(numTwo, numOne);
  } else {
    arr.push(numThree);
    numOne > numTwo ? arr.push(numOne, numTwo) : arr.push(numTwo, numOne);
  }
  return arr;
};

alert(
  `Answer to sort three numbers - ${sortNumbers(numOne, numTwo, numThree)}`
);

// 9. Write a JavaScript function that returns a string that has letters in alphabetical order.

const sortAlpha = function (str) {
  return str.split("").sort().join("");
};

console.log(`Answer for 9th problems - ${sortAlpha("webmaster")}`);

// 10. Write a JavaScript program that adds a keydown event listener to a text input to detect when the &quot;Enter key&quot; is pressed.

const userInput = document.getElementById("text-input");
userInput.addEventListener("keydown", () => {
  console.log("Answer for 10th problem Input keydown event happens here!!!");
});
