import { User, Album, Picture, PhotoOrientation } from './photo-app';

const user = new User(1, 'Erickowski', 'Erick', true);
const album = new Album(10, 'Platzi Album');
const picture = new Picture(1, 'Foto', '2020-08', PhotoOrientation.Landscape);

// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log(user);
/* User {
  id: 1,
  username: 'Erickowski',
  firstName: 'Erick',
  isPro: true,
  album: [ Album { id: 10, title: 'Platzi Album', pictures: [Array] } ]
} */
