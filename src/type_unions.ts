// 10, '10'
// let id_user: number | string;
// id_user = 10; // ok
// id_user = '10'; // ok

// // Buscar username dado un ID
// function getUsernameById(id: number | string) {
//   // ...
//   return 'criniguez';
// }

// getUsernameById(20);
// getUsernameById('20');

// Alias de Tipos: TS
type IdUser = number | string;
type Username = string;

let id_user: IdUser;
id_user = 10; // ok
id_user = '10'; // ok

// Buscar username dado un ID
function getUsernameById(id: IdUser): Username {
  // ...
  return 'criniguez';
}

getUsernameById(20); // ok
getUsernameById('20'); // ok

// Tipos literales

// 100x100, 500x500, 1000x1000

type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200'; // Type '"200x200"' is not assignable to type 'SquareSize'
let smallPicture: SquareSize = '100x100'; // ok
let mediumPicture: SquareSize = '500x500'; // ok
