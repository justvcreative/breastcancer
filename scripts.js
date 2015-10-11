$(function(){												
       
       //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
      		e.preventDefault();
      		$('body').toggleClass('nav-expanded');
      		$('#nav-expander').hide();
      		$('#donate-icon').hide();
      	});
      	$('#nav-close').on('click',function(e){
      		e.preventDefault();
      		$('body').removeClass('nav-expanded');
      		$('#nav-expander').show();
      		$('#donate-icon').show();
      	});
});