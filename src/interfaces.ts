export {};

// Función para mostrar una fotografía
enum PictureOrientation {
  PictureLandscape,
  PicturePortrait,
  PictureSquare,
  PicturePanorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PictureOrientation;
}

function showPicture(picture: Picture) {
  console.log(
    `[title: ${picture.title}, date: ${picture.date}, orientarion: ${picture.orientation}]`,
  );
}

let myPic = {
  title: 'Test Title',
  date: '2020-03',
  orientation: PictureOrientation.PictureLandscape,
};

showPicture(myPic);
showPicture({
  title: 'Test title',
  date: '2020-03',
  orientation: PictureOrientation.PicturePortrait,
  // extra: 'test',
});

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PictureOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = { title: 'default', date: '2020-03' };
  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) {
    pic.date = config.date;
  }
  return pic;
}

let picture = generatePicture({});
console.log({ picture }); // { picture: { title: 'default', date: '2020-03' } }
picture = generatePicture({ title: 'Travel Pic' });
console.log({ picture }); // { picture: { title: 'Travel Pic', date: '2020-03' } }
picture = generatePicture({ title: 'Travel Pic', date: '2021-05' });
console.log({ picture }); // { picture: { title: 'Travel Pic', date: '2021-05' } }

// Interfaz: Usuario

interface User {
  readonly id: number; // solo lectura
  username: string;
  isPro: boolean;
}

let user: User;
user = { id: 10, username: 'criniguez', isPro: true };
console.log({ user }); // { user: { id: 10, username: 'criniguez', isPro: true } }
user.username = 'dariorojas';
// user.id = 20; // Cannot assign to 'id' because it is a read-only property
