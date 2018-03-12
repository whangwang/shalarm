$(document).ready(function() {
	$('#scroll-content').pagepiling({
    anchors: ['Page1', 'Page2', 'Page3'],
    afterLoad: function(anchorLink, index){
			//using index
			$('.section-'+String(index)).find('.intro-panel:not(.active)').addClass('active');
		},
    afterRender: function(){
			$('.section-1').find('.intro-panel:not(.active)').addClass('active');
		}
  });
  $('body').on('click','.mobile-menu-btn',function(){
    if($('.header').hasClass('active')){
      $('.header').removeClass('active');
    }else{
      $('.header').addClass('active');
    }
  });
});
