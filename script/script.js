$(function() {
$(".nav-button").click(function() {
  $(".nav-wrap").slideToggle();
});

  var $container = $('#container');
$container.isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});



$('.button-group button').click(function(){
	$('.button-group .filter-button').removeClass('filter-button');
	$(this).addClass('filter-button');

	var selector = $(this).attr('data-filter');
	$container.isotope({
		filter: selector,
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
			}
		});
		return false;
	});

var $setFilter = $('#filter'),
    $setList = $('#container'),
    $setFilterAll = $('.allitem');
 
    var $setFilterBtn = $setFilter.children('button'),
    $setFilterList = $setList.children('.grid-item');
 
    $setFilterBtn.click(function(){
        if(!($(this).hasClass('active'))){
            var filterClass = $(this).attr('class');
            $setFilterList.each(function(){
                
            });
            $setFilterBtn.removeClass('active');
            $(this).addClass('active');
        }
    });
    $(window).on('load', function() {
    $setFilterAll.click();
    });

$('.nav-button').on('click',function(){
  if( $(this).hasClass('active') ){
    $(this).removeClass('active');
    $('.nav-wrap').addClass('close').removeClass('open');
  }else {
    $(this).addClass('active');
    $('.nav-wrap').addClass('open').removeClass('close'); 
  }
});


});