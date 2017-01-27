

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



   $(".dfbutton").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();  

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    }  
    else {    
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
       } else {
        newVal = 1;
      }
    }

  $button.parent().find("input").val(newVal);

});
 
/*popups*/
$('a[name=modal]').click(function(e) {
  e.preventDefault();
  var id = $(this).attr('href');
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  $('#mask').css({'width':maskWidth,'height':maskHeight});
  $('#mask').fadeTo("slow",0.8); 
  var winH = $(window).height();
  var winW = $(window).width();
  posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
  $(id).css('top',  posTop+50);
  $(id).css('left', winW/2-$(id).width()/2);
  $(id).fadeIn(500); 
});
$('.window .df-cloself').click(function (e) {
  e.preventDefault();
  $('#mask, .window').hide();
  $('.window').hide();
}); 

$('#mask, .an-exit__krest').click(function () {
  $('#mask').hide();
  $('.window').hide();
}); 
$(".phone").mask("+ 7 (999) 999 - 99 - 99?"); 
$(".form1").submit(function() { 
  var tel = $(this).find('input[name="phone"]');
  var empty = false;
  if (tel.val() == ""){
    empty = true;
  }
  if (empty == true){
    tel.addClass("error-input");
    tel.focus();
  }else{
    var form_data = $(this).serialize(); 
    $.ajax({
      type: "POST", 
      url: "/sendmessage.php", 
      data: form_data,
      success: function() {
        cleanTnanks(this);
      }
    });
  }
  return false;
});
  function cleanTnanks(form){
      $('input[type="text"]').removeClass("error-input");
      $("input[type=text], textarea").val("");
      $('.window').hide();                
      location = "spasibo.php";
  };

/*якоря*/
 $(".dd-relative a, .div-left a, .dd-mobile-nav a").click(function(e){
      e.preventDefault();
      var currentBlock = $(this).attr("href");
      currentBlockoffset = $(currentBlock).offset().top;
      $("html, body").animate({
        scrollTop: currentBlockoffset
      }, 500);
    });
});


