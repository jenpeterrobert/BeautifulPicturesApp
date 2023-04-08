var imagesData = [
    {
      photo: 'images/best-destinations-in-the-world-wallpaper-preview.jpg',
      title: 'Photo 1',
      description: 'This is the first photo'
    },
    {
      photo: 'images/photo1.jpeg',
      title: 'Photo 2',
      description: 'This is the second photo'
    },
    {
      photo: 'images/photography-water-reflection-bali-wallpaper-preview.jpg',
      title: 'Photo 3',
      description: 'This is the third photo'
    },
    {
      photo: 'images/photo2.jpg',
      title: 'Photo 4',
      description: 'This is the fourth photo'
    },
    {
      photo: 'images/photo3.jpg',
      title: 'Photo 5',
      description: 'This is the fifth photo'
    },
    {
      photo: 'images/1369012.jpg',
      title: 'Photo 6',
      description: 'This is the sixth photo'
    }
  ];

var currentPhoto = 0;

$('#photo').attr('src', imagesData[currentPhoto].photo);

function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#title').text(imagesData[photoNumber].title);
    $('#description').text(imagesData[photoNumber].description);
  }

loadPhoto(currentPhoto);

$('#buttonForward').click(() => {
  currentPhoto++;
  loadPhoto(currentPhoto);
})

$('#buttonBack').click(() => {
    currentPhoto--;
    loadPhoto(currentPhoto);
  })