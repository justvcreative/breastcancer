console.log("Hello");

$(function(){												
       
       //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
      		e.preventDefault();
      		$('body').toggleClass('nav-expanded');
      		$('#nav-expander').addClass('hidden');
      	});
      	$('#nav-close').on('click',function(e){
      		e.preventDefault();
      		$('body').removeClass('nav-expanded');
      		$('#nav-expander').removeClass('hidden');
      	});
        	
});