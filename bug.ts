function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

let arr = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5] (Correct)

arr = [5, 4, 3, 2, 1];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5] (Correct)

arr = [1, 5, 2, 4, 3];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5] (Correct)

arr = ["z", "a", "b", "c", "y"];
arr.sort(compare);
console.log(arr); //Output: ["a", "b", "c", "y", "z"] (Correct)

arr = ["z", "a", "b", "c", "y"];
arr.sort( (a, b) => a.localeCompare(b));
console.log(arr); //Output: ["a", "b", "c", "y", "z"] (Correct)