function compare(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  } else {
    // Handle cases where types are different (throw error or provide default behavior)
    throw new Error("Cannot compare different types");
  }
}

let arr = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr = [5, 4, 3, 2, 1];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr = [1, 5, 2, 4, 3];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr = ["z", "a", "b", "c", "y"];
arr.sort(compare);
console.log(arr); // Output: ["a", "b", "c", "y", "z"]

arr = [1, "a", 2, "b"];
// arr.sort(compare); // Throws an error because of mixed types
console.log(arr); // [1, 