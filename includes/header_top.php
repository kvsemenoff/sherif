<section class="section section-header-mobile-view">
	<div class="mobile-menu">
		<div class="dd-mobile-tel">
			<div class="dd-ico-wrap">
				<img src="img/ico.png" alt="">
			</div>
			<div class="dd-tel-wrap">
				<span><span>8 (567)</span> 876 87 98</span>
			</div>
			<div class="clearfix"></div>
			<ul class="dd-mobile-nav">
				<li><a href="#">Что в комплекте</a></li>
				<li><a href="#">Почему камни Sheriff</a></li>
				<li><a href="#">О пользе камней</a></li>
				<li><a href="#">Отзывы</a></li>
				<li><a href="#">Доставка и оплата</a></li>
			</ul>
		</div>
	</div>
	<div class="dd-mobile-logo">
		<img src="img/logo-mob.png" alt="">
	</div>
	<div class="dd-mobile-txt">
		<span></span>
		<span></span>
		<span></span>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				
			</div>
		</div>
	</div>
</section>

<script>
	$('.dd-ico-wrap').click(function(){
		$('.dd-mobile-nav').slideToggle(500);
	});
	$('.dd-mobile-nav').mouseleave(function(){
		$(this).slideUp(800);
	});
</script>

<script>
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
    </script>