# Unexpected behavior of Array.sort() with custom comparison function in TypeScript

This repository demonstrates an unexpected behavior of the `Array.sort()` method in TypeScript when a custom comparison function is used to sort an array containing a mix of strings and numbers.  The issue is subtle and can lead to incorrect sorting results.

The `bug.ts` file contains code that showcases the problem.  The `bugSolution.ts` file provides a solution and explanation.

## Problem

TypeScript's `Array.sort()` method's default behavior is to convert elements to strings before comparison. This may produce unintended results when attempting to sort arrays of mixed data types.  A custom comparison function is typically used to address this, but unforeseen issues can still arise.

## Solution

The solution involves using `localeCompare()` for string comparisons and ensuring type consistency in the comparison function to prevent type coercion issues.