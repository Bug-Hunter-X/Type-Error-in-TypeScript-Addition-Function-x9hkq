# Type Error in TypeScript Addition Function

This repository demonstrates a common type error in TypeScript. The `add` function is defined to accept two numbers as arguments, but the call to `add(5, '10')` passes a string as the second argument. This results in a type error.

The `bug.ts` file contains the buggy code, while `bugSolution.ts` provides a corrected version.

## How to reproduce the error

1. Clone this repository.
2. Navigate to the repository's directory.
3. Compile the code using the command `tsc bug.ts`.
4. Observe the type error in the compiler output.

## Solution

The type error can be resolved by ensuring that all arguments passed to the `add` function are numbers. The solution is provided in `bugSolution.ts`.