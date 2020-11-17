// Corchetes []

// Tipo explícito
let users: string[];
users = ['criniguez', 'dariorojas', 'maryluna'];
// users = [1, true, 'test']; // 2 errores

// Tipo inferido
let otherUsers = ['criniguez', 'dariorojas', 'maryluna']; // otherUsers: string[]
// otherUsers = [1, true, 'test']; // 2 errores

// Array<tipo>

let pictureTitles: Array<string>; // pictureTitles: string[]
pictureTitles = ['A dog', 'A cat', 'A pig'];

// Accediendo a los valores en un Array
console.log('first user', users[0]); // first user criniguez
console.log('first title', pictureTitles[0]); // first title A dog

// Propiedades en Arrays
console.log('users.length', users.length); // users.length 3

// Uso de funciones en Arrays
users.push('jtapia');
users.sort();
console.log('users', users); // users [ 'criniguez', 'dariorojas', 'jtapia', 'maryluna' ]
