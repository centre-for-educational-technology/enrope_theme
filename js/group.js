(function ($, Drupal) {



  var image = $('#cover_image').html();

  if(image.includes('files')){

    $('header.masthead.group:before').css('background-image', 'url('+image+')');
  }




})(jQuery, Drupal);
