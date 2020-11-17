export {};

// <tipo> // Angle Bracket Syntax

let username: any;
username = 'criniguez';
username = 'luis';

// tenemos una cadena, TS confía en mi!
let message: string =
  (<string>username).length > 5 ? `Welcome ${username}` : 'Username is too short';
console.log({ message }); // { message: 'Welcome criniguez' }

let usernameWithId: any = 'criniguez 1';
// Cómo obtener el username?
username = (<string>usernameWithId).substring(0, 10);
console.log('Username only', username); // Username only criniguez

// Sintaxis "as"
message = (username as string).length > 5 ? `Welcome ${username}` : 'Username is too short';

let helloUser: any;
helloUser = 'hello criniguez';
username = (helloUser as string).substring(6);
console.log({ username }); // { username: 'criniguez' }
