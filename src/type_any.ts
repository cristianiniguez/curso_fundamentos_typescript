// Tipado explícito
let idUser: any;
idUser = 1; // number (todo ok)
idUser = '1'; // string (todo ok)
console.log('idUser', idUser); // idUser 1

// Tipado inferido
let otherId;
otherId = 1; // number (todo ok)
otherId = '1'; // string (todo ok)
otherId = true; // boolean (todo ok)
console.log('otherId', otherId); // otherId 1

let surprise: any = 'hello typescript';
// surprise.sayHello(); // Error?
const res = surprise.substring(6); // Error?
console.log('res', res);
