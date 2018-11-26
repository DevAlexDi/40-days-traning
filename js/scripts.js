$(document).ready(function(){
    //sm hide show sidebar
    
    $('.system__show-hide-sidebar').click(function(){
        if(!$('.system__sidebar').hasClass('show-menu')){
            $('.system__sidebar').addClass('show-menu');
        }
    });
  
    
    $('.system__content').click(function(){
        if($('.system__sidebar').hasClass('show-menu')){
            $('.system__sidebar').removeClass('show-menu');
        }
        
    });
    
    
});