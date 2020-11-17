// Type: object

let user: object;
user = {}; // Object
user = {
  id: 1,
  username: 'criniguez',
  firstName: 'Cristian',
  isPro: true,
};

console.log({ user });

// Object vs object (Clase de JS vs tipo de TS)

const myObj = {
  id: 1,
  username: 'criniguez',
  firstName: 'Cristian',
  isPro: true,
};

const isInstance = myObj instanceof Object;
console.log({ isInstance }); // { isInstance: true }
console.log('user.username', myObj.username); // user.username criniguez
