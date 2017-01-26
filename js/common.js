

$(document).ready(function(){

  $('.az-select').each(function(){
    var select = $(this);    
    var option = select.find('select option');
    var str = '<div class="az-options">';
    select.find('option').each(function(){
      str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
  });
    str+= '</div>';
    select.html(select.html() + str);

    select.find('select').mousedown(function(){
      return false;
  });
    select.mouseup(function(){
      select.find('select').focus();
  });
    select.find('.az-options div[data-val]').click(function(){
      select.find('select').val($(this).attr('data-val'));
  });
    select.find('select').focusout(function(){
      if(!select.is(':hover')){
        select.find('.az-options').slideUp(0);
        select.removeClass('az-select-focus');
    }
});
});

  $(".az-select").click(function(){
    $(this).find('.az-options').slideToggle(0);
    $(this).toggleClass('az-select-focus');
});

  var owl2 = $("#df-owl");
  owl2.owlCarousel({
    loop:true,
    nav:true, 
    autoplay:false,
    smartSpeed:1000,
    margin:0,    
    navText:['<span class="df-left"></span>','<span class="df-right"></span>'],
    responsive:{
      0:{
        items:1
    },       
    1000:{
        items:1
    },
    1248:{
        items:1
    }
}
});

  $('.dd-ico-wrap').click(function(){
    $('.dd-mobile-nav').slideToggle(500);
});
  var headerH = $("#js-header").height(),
  navH = $("#js-nav-container").innerHeight();
  $(document).on("scroll", function() {
    var documentScroll = $(this).scrollTop();
    if(documentScroll > headerH) {
        $("#js-nav-container").addClass("fix-navbar-top");

        $("#js-header").css({
            "paddingTop": navH
        });
        $("#js-nav-container").css({
            "display": "block"
        });
    } else {
        $("#js-nav-container").removeClass("fix-navbar-top");
        $("#js-header").removeAttr("style");
        $("#js-nav-container").css({
            "display": "none"
        });
    }
});
  $(function() {
    function navigation_scroll(){
        var offset = $('.dd-mobile-tel').height() || $(window).height() || 150;
        var scroll = $(document).scrollTop();
        if (scroll < 1) {
            $('.dd-mobile-tel')
            .toggleClass('header-no-fixed', false)
            .toggleClass('header-fixed', false);
        }     
        else if (scroll >= offset) {
            $('.dd-mobile-tel')
            .toggleClass('header-no-fixed', false)
            .toggleClass('header-fixed', true);

        }
        else if (scroll < offset - 1) {
            $('.dd-mobile-tel')
            .toggleClass('header-fixed', true)
            .toggleClass('header-no-fixed', false);
        }
    }
    $(document).scroll(function(){
        navigation_scroll();
    });
});
});


