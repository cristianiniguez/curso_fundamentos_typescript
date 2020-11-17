export {};

// Crear una fotografía
// function createPicture(title, date, size) {
//   // title
// }

// Usando TS, definimos tipos para parámetros
type SquareSize = '100x100' | '500x500' | '1000x1000';

// function createPicture(title: string, date: string, size: SquareSize) {
//   // Se crea la fotografía
//   console.log('create Picture using', title, date, size);
// }

// createPicture('My Brithday', '2020-03-16', '500x500'); // create Picture using My Brithday 2020-03-16 500x500
// createPicture('Colombia Trip', '2020-03'); // Falta un parámetro

// Parámetros opcionales

function createPicture(title?: string, date?: string, size?: SquareSize) {
  // Se crea la fotografía
  console.log('create Picture using', title, date, size);
}

createPicture('My Brithday', '2020-03-16', '500x500'); // create Picture using My Brithday 2020-03-16 500x500
createPicture('Colombia Trip', '2020-03'); // create Picture using Colombia Trip 2020-03 undefined
createPicture('Colombia Trip'); // create Picture using Colombia Trip undefined undefined
createPicture(); // create Picture using undefined undefined undefined

// Flat Array Functions
let createPic = (title: string, date: string, size: SquareSize): object => ({ title, date, size });

const picture = createPic('Platzi Session', '2020-03-10', '100x100');
console.log({ picture }); // { picture: { title: 'Platzi Session', date: '2020-03-10', size: '100x100' } }
