/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function (context, settings) {


      // Floating label headings for the contact form
      $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
      });

      // Show the navbar when the page is scrolled up
      var MQL = 992;

      //primary navigation slide-in effect
      if ($(window).width() > MQL) {
        var headerHeight = $('#mainNav').height();

        $(window).on('scroll', {
            previousTop: 0
          },
          function () {


            var currentTop = $(window).scrollTop();
            //check if user is scrolling up
            if (currentTop < this.previousTop) {
              //if scrolling up...
              if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
                $('#mainNav').addClass('is-visible');
              } else {
                $('#mainNav').removeClass('is-visible is-fixed');
              }

              //Set header offset depending on header height
              var headerFullHeight = $('#mainNav').outerHeight();

              $('#mainNav').css({
                'top': -headerFullHeight + 'px'
              });
            } else if (currentTop > this.previousTop) {
              //if scrolling down...
              $('#mainNav').removeClass('is-visible');
              if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');


            }
            this.previousTop = currentTop;

            //Remove header offset when reached top
            if ($(window).scrollTop() === 0) {
              $('#mainNav').css({
                'top': '0px'
              });

            }

          });


      }


      $('[data-toggle="tooltip"]').tooltip();


      if ($('#edit-status-value').length) {

        if (!($('#edit-status-value').is(':checked'))) {
          $('#edit-status-value').parent().find('label').text('Draft');
        }

        $('#edit-status-value').change(function () {
          if (this.checked) {
            $(this).parent().find('label').text('Published');
          } else {
            $(this).parent().find('label').text('Draft');
          }
        });
      }


    }
  };

})(jQuery, Drupal);
