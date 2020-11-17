// [1, 'criniguez']
let tupleUser: [number, string];
tupleUser = [1, 'criniguez'];

console.log({ tupleUser }); // { tupleUser: [ 1, 'criniguez' ] }
console.log('id', tupleUser[0]); // id 1
console.log('username', tupleUser[1]); // username criniguez

// Tuplas con varios valores

// [id, username, isPro]
let tupleUserInfo: [number, string, boolean];
tupleUserInfo = [2, 'dariorojas', false];
console.log({ tupleUserInfo });

// Arreglo de tuplas
let arrayOfTuples: [number, string][] = [];
arrayOfTuples.push([1, 'criniguez']);
arrayOfTuples.push([2, 'dariorojas']);
arrayOfTuples.push([3, 'maryluna']);
console.log({ arrayOfTuples });

// Uso de funciones Array en tuplas
// dariorojas -> dariorojas001

arrayOfTuples[1][1] = arrayOfTuples[1][1].concat('001');
console.log({ arrayOfTuples });
