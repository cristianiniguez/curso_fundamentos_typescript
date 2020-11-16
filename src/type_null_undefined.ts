// Null

let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // Type '1' is not assignable to type 'null'

let otherVariable = null; // otherVariable: any
// otherVariable = 'test'; // ya no

console.log({ nullVariable });
console.log({ otherVariable });

// Undefined

let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Type '"test"' is not assignable to type 'undefined'

let otherUndefined = undefined; // otherundefined: any
// otherUndefined = 'test'; // ya no

console.log({ undefinedVariable });
console.log({ otherUndefined });

// Null y Undefined como subtipos

// --strictNullChecks
let albumName: string;
// albumName = null; // ya no
// albumName = undefined; // ya no
