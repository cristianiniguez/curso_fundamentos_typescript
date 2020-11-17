// Void

// Tipado Explícito

// function showInfo(user: any): any
function showInfo(user: any): any {
  console.log('User Info', user.id, user.name);
}

showInfo({ id: 1, name: 'criniguez' }); // User Info 1 criniguez

// Tipo Inferido

function showFormattedInfo(user: any) {
  console.log(
    'User Info',
    `
      id: ${user.id}
      name: ${user.name}
    `,
  );
}

showFormattedInfo({ id: 1, name: 'criniguez' });

// Tipo void como tipo de dato en variable
let unusable: void;

// con "strict": true
// unusable = null; // Type 'null' is not assignable to type 'void'

// con "strict": false
// unusable = null; // ok

unusable = undefined; // ok

// Tipo: Never

function handleError(code: number, message: string): never {
  // ...
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, 'Not Found');
} catch (error) {
  console.log(error.message); // Not Found. Code: 404
}

function sumNumbers(limit: number): never {
  let suma = 0;
  while (true) {
    suma++;
  }
}

sumNumbers(10); // ciclo infinito
