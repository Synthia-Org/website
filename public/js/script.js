$(document).ready(function() {
  $('.tdnn').click(function () {
    $("body").toggleClass('light');
    $(".moon").toggleClass('sun');
    $(".tdnn").toggleClass('day');
  })});

 
$(document).ready(function() {
  VanillaTilt.init(document.querySelectorAll(".Mcard"), {
    max: 15,
    speed: 300,
    glare: true,
    "max-glare": 1
  });
});

  


  //-----------resources------------
  
$('div.card-image').each(function() {
  random_image_index = Math.floor(images.length * Math.random());
  $(this).css('background-image', 'url(' + images[random_image_index] + ')');
});
