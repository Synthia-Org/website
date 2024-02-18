
$('div.card-image').each(function() {
    random_image_index = Math.floor(images.length * Math.random());
    $(this).css('background-image', 'url(' + images[random_image_index] + ')');
  });
  