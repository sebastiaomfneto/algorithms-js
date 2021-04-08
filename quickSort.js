const assert = require("assert");

/**
 *
 * @param {Array<number>} array
 *
 * @returns {Array<number>}
 */
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const [PIVOT, ...elements] = array;
  const GREATER = [];
  const LESSER = [];

  for (const element of elements) {
    if (element > PIVOT) {
      GREATER.push(element);
    } else {
      LESSER.push(element);
    }
  }
  let sorted = quickSort(LESSER);
  sorted.push(PIVOT);
  sorted = sorted.concat(quickSort(GREATER));

  return sorted;
}

/**
 *
 * @param {Array<any>} arrOne
 * @param {Array<any>} arrTwo
 */
const assertArrays = (arrOne, arrTwo) =>
  assert.strictEqual(JSON.stringify(arrOne), JSON.stringify(arrTwo));

assertArrays(quickSort([5, 4, 3, 10, 2, 1]), [1, 2, 3, 4, 5, 10]);
assertArrays(quickSort([]), []);
assertArrays(quickSort([5, 4]), [4, 5]);
assertArrays(quickSort([1, 2, 3]), [1, 2, 3]);
