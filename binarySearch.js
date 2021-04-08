const assert = require('assert')

/**
 * @param {Array<string|number>} array
 * @param {string|number} item
 * @param {number} low
 * @param {number} high
 *
 * @return {number}
 */
function binarySearch(array, element, low = 0, high = array.length - 1) {
  const middle = Math.floor(low + (high - low) / 2);

  if (high >= low) {
    if (element === array[middle]) {
      return middle;
    }

    if (element >= array[middle]) {
      return binarySearch(array, element, middle + 1, high);
    }

    return binarySearch(array, element, low, middle - 1);
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArr = [
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliet",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-Ray",
  "Yankee",
  "Zulu",
];

assert.strictEqual(binarySearch(arr, 3), 2)
assert.strictEqual(binarySearch(arr, 7), 6);
assert.strictEqual(binarySearch(arr, 13), -1);

assert.strictEqual(binarySearch(stringArr, "Charlie"), 2);
assert.strictEqual(binarySearch(stringArr, "Zulu"), 25);
assert.strictEqual(binarySearch(stringArr, "Sierra"), 18);
