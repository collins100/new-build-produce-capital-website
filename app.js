$(document).ready(function() {
	$('.thumbnail').on('mouseenter' , '.thumbnail', function(){
	  $(this).toggleClass('highlight');
	 if($(this).hasClass('highlight')) {
	    $(this).animate({'top':'-10px'});
	  } else {
	  	$(this).animate({'top': '0px'}, 200)
	  }
	});
});