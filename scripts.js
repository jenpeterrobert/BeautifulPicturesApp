var imagesData = [
    {
      photo: 'images/best-destinations-in-the-world-wallpaper-preview.jpg',
      title: 'Photo 1',
      description: 'This is the first photo'
    },
    {
      photo: 'images/download (4).jpeg',
      title: 'Photo 2',
      description: 'This is the second photo'
    },
    {
      photo: 'images/photography-water-reflection-bali-wallpaper-preview.jpg',
      title: 'Photo 3',
      description: 'This is the third photo'
    },
    {
      photo: 'images/photo-1542856391-010fb87dcfed.jpeg',
      title: 'Photo 4',
      description: 'This is the fourth photo'
    },
    {
      photo: 'images/photo-1476514525535-07fb3b4ae5f1.jpeg',
      title: 'Photo 5',
      description: 'This is the fifth photo'
    },
    {
      photo: 'images/wp3103595.jpg',
      title: 'Photo 6',
      description: 'This is the sixth photo'
    }
  ];

var currentPhoto = 0;

$('#photo').attr('src', imagesData[currentPhoto].photo);

function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);
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