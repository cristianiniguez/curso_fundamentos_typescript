export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  // Propiedades
  public id: number;
  public title: string;
  public orientation: PhotoOrientation;

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
  public id: number;
  public title: string;
  public pictures: Picture[];

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

// Accediendo a los miembros públicos

picture.id = 100; // public
picture.title = 'Another title'; // public

album.title = 'Personal Activities';
console.log(album);
/* Album {
  id: 1,
  title: 'Personal Activities',
  pictures: [ Picture { id: 100, title: 'Another title', orientation: 2 } ]
} */
