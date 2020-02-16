(function ($, Drupal) {


  // Noty({
  //   text: "Notification text"
  // }).show();

  var image = $('#cover_image').html();

  if(image.includes('files')){


    $('header.masthead.cover-img').css('background-image', 'url('+image+')');
  }


})(jQuery, Drupal);



