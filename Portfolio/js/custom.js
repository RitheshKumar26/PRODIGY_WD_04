(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);


// JavaScript to dynamically display project details in the modal
document.querySelectorAll('.btn-info-symbol').forEach(button => {
  button.addEventListener('click', () => {
      const title = button.getAttribute('data-title');
      const description = button.getAttribute('data-description');
      const link = button.getAttribute('data-link');

      // Update modal content
      document.getElementById('projectModalLabel').textContent = title;
      document.getElementById('projectDescription').textContent = description;
      document.getElementById('projectLink').href = link;

      // Show the modal
      const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
      projectModal.show();
  });
});

