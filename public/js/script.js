// script.js


'use strict'

const menuToggle = document.querySelector('.menu-toggle');


const navBar = document.querySelector('.navbar');



// -------- toggle switch --------
$('.tdnn').click(function () {
    $("body").toggleClass('light');
    $(".moon").toggleClass('sun');
    $(".tdnn").toggleClass('day');
  });
  


  //-----------resources------------
  
$('div.card-image').each(function() {
  random_image_index = Math.floor(images.length * Math.random());
  $(this).css('background-image', 'url(' + images[random_image_index] + ')');
});
