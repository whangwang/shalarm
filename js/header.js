$(document).ready(function() {
  $('body').on('click','.mobile-menu-btn',function(){
    if($('.header').hasClass('active')){
      $('.header').removeClass('active');
    }else{
      $('.header').addClass('active');
    }
  });
});
