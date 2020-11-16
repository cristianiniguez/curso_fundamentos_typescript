// Tipo: Number

// Tipado Explícito
let phone: number;
phone = 1;
phone = 79890908;
// phone = 'hola'; // Type 'string' is not assignable to type 'number'

// Tipado Inferido
let phoneNumber = 79890908; // phone: number
// phoneNumber = true; // Type 'boolean' is not assignable to type 'number'

// Valores hexadecimales
let hex: number = 0x123def;

// Valores binarios
let binary: number = 0b101010;

// Valores octales
let octal: number = 0o744;

// Tipo: Boolean

// Tipado Explícito
let isPro: boolean;
isPro = true; // isPro: boolean
// isPro = 1; // Type 'number' is not assignable to type 'boolean'

// Tipado Inferido
let isUserPro = false; // isPro: boolean
// isUserPro = 10; // Type 'number' is not assignable to type 'boolean'

// Tipo: String
let username: string = 'criniguez';
username = "Cristian"; // prettier-ignore
// username = true; // Type 'boolean' is not assignable to type 'string'

// Template String
let userInfo: string;
userInfo = `
  User Info:
    username: ${username}
    firstname: ${username + ' Iñiguez'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
