export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  // Propiedades
  private id: number;
  private title: string;
  private orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }
  // Comportamiento
  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album {
  private id: number;
  private title: string;
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi Session', PhotoOrientation.Square);
album.addPicture(picture);

console.log(album);
/* Album {
  id: 1,
  title: 'Personal Pictures',
  pictures: [ Picture { id: 1, title: 'Platzi Session', orientation: 2 } ]
} */

// Accediendo a los miembros privados

// picture.id = 100; // Property 'id' is private and only accessible within class 'Picture'
// picture.title = 'Another title'; // Property 'title' is private and only accessible within class 'Picture'
// album.title = 'Personal Activities'; // Property 'title' is private and only accessible within class 'Album'
