// Orientación para fotografías

// Con JS
/*
const landscape = 0;
const protrait = 1;
const square = 2;
const panorama = 3;
*/

// Con TS
enum PhotoOrientation {
  Landscape = 0,
  Portrait = 1,
  Square = 2,
  Panorama = 3,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log({ landscape }); // { landscape: 0 }
console.log(PhotoOrientation[0]); // Landscape
console.log(PhotoOrientation['Landscape']); // 0

enum PictureOrientation {
  Landscape = 10,
  Portrait, // 11
  Square, // 12
  Panorama, // 13
}

console.log(PictureOrientation.Portrait); // 11

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  EEUU = 'usa',
  Espana = 'esp',
}

const country: Country = Country.Colombia;
console.log({ country }); // { country: 'col' }
