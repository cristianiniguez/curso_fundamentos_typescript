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
