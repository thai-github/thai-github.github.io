// init Isotope
var $container = $('.portfolio-items').isotope('layout');

$('.portfolio-filter').on( 'click', 'a', function(e) {
	e.preventDefault();
  	var filterValue = $(this).attr('data-filter');
  	$container.isotope({ filter: filterValue });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$("#credit").click(function(){
	$(".credits-section").fadeToggle("slow", "linear");
	$('html, body').scrollTop( $(document).height() );
});