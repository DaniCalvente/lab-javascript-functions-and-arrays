// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1, num2;
  }
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  let longestWord = "";

  if (!words.length) {
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let totalSum = 0;

  if (!numbers.length) {
    return totalSum;
  }

  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
}

// Iteration #3.1 Bonus:
function sum(numbers) {
  let totalSum = 0;

  if (!numbers.length) {
    return totalSum;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      totalSum += numbers[i];
    } else if (typeof numbers[i] === "string") {
      totalSum += numbers[i].length;
    } else if (typeof numbers[i] === "boolean") {
      totalSum += numbers[i];
    } else {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return totalSum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  let totalSum = 0;

  if (!numbersAvg.length) {
    return null;
  }

  for (let i = 0; i < numbersAvg.length; i++) {
    totalSum += numbersAvg[i];
  }
  return totalSum / numbersAvg.length;
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  let totalWordLength = 0;

  if (!wordsArr.length) {
    return null;
  }

  for (let i = 0; i < wordsArr.length; i++) {
    totalWordLength += wordsArr[i].length;
  }
  return totalWordLength / wordsArr.length;
}

// Bonus - Iteration #4.1
function avg(mixedArr) {
  let totalMixedArr = 0;

  if (!mixedArr.length) {
    return null;
  }

  for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] === "number") {
      totalMixedArr += mixedArr[i];
    } else if (typeof mixedArr[i] === "string") {
      totalMixedArr += mixedArr[i].length;
    } else if (typeof mixedArr[i] === "boolean") {
      totalMixedArr += mixedArr[i];
    }
  }
  return totalMixedArr / mixedArr.length;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(wordsUnique) {
  let cleanArr = [];

  if (!wordsUnique.length) {
    return null;
  }

  for (let i = 0; i < wordsUnique.length; i++) {
    if (!cleanArr.includes(wordsUnique[i])) {
      cleanArr.push(wordsUnique[i]);
    }
  }
  return cleanArr;
}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordsFind, wordToBeFound) {
  if (!wordsFind.length) {
    return null;
  }

  if (wordsFind.includes(wordToBeFound)) {
    return true;
  } else {
    return false;
  }
}

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(wordsCount, wordToBeCounted) {
  let totalTimes = 0;

  if (!wordsCount.length) {
    return 0;
  }

  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] === wordToBeCounted) {
      totalTimes++;
    }
  }

  return totalTimes;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  let greatest = 0;

  let horizontalProduct = 0;
  let verticalProduct = 0;
  let diagonalProduct = 0;
  let inverseDiagonalProduct = 0;

  for (let vertical = 0; vertical < matrix.length - 3; vertical++) {
    for (let horizontal = 0; horizontal < matrix.length - 3; horizontal++) {
      horizontalProduct =
        matrix[vertical][horizontal] *
        matrix[vertical][horizontal + 1] *
        matrix[vertical][horizontal + 2] *
        matrix[vertical][horizontal + 3];
      if (horizontalProduct > greatest) {
        greatest = horizontalProduct;
      }

      verticalProduct =
        matrix[vertical][horizontal] *
        matrix[vertical + 1][horizontal] *
        matrix[vertical + 2][horizontal] *
        matrix[vertical + 3][horizontal];
      if (verticalProduct > greatest) {
        greatest = verticalProduct;
      }

      diagonalProduct =
        matrix[vertical][horizontal] *
        matrix[vertical + 1][horizontal + 1] *
        matrix[vertical + 2][horizontal + 2] *
        matrix[vertical + 3][horizontal + 3];
      if (diagonalProduct > greatest) {
        greatest = diagonalProduct;
      }

      inverseDiagonalProduct =
        matrix[vertical][horizontal + 3] *
        matrix[vertical + 1][horizontal + 2] *
        matrix[vertical + 2][horizontal + 1] *
        matrix[vertical + 3][horizontal];
      if (inverseDiagonalProduct > greatest) {
        greatest = inverseDiagonalProduct;
      }
    }
  }
  return greatest;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
