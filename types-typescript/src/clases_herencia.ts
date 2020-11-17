export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// Superclase
abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }
  // set id(id: number) {
  //   this._id = id;
  // }
  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
}

class Picture extends Item {
  public static photoOrientation = PhotoOrientation;

  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    this._orientation = orientation;
  }

  get orientation() {
    return this._orientation;
  }
  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }

  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album extends Item {
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this._pictures = [];
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi Session', PhotoOrientation.Square);
album.addPicture(picture);

console.log(album);
/* Album {
  _id: 1,
  _title: 'Personal Pictures',
  _pictures: [ Picture { _id: 1, _title: 'Platzi Session', _orientation: 2 } ]
} */

// Accediendo a los miembros privados

// picture.id = 100; // private, set id(100)
picture.title = 'Another title'; // private, set title('Another title')
album.title = 'Personal Activities'; // private, set title('Personal Activities')

console.log(album);
/* Album {
  _id: 1,
  _title: 'Personal Activities',
  _pictures: [ Picture { _id: 100, _title: 'Another title', _orientation: 2 } ]
} */

// const item = new Item(1, 'Test title'); // Cannot create an instance of an abstract class
// console.log(item); // Item { _id: 1, _title: 'Test title' }

// Probar el miembro estático
console.log('PhotoOrientation', Picture.photoOrientation.Landscape); // PhotoOrientation 0
