$(document).ready(function(){

    $('ul.product-nav li a').click(function(e){
        e.preventDefault();
        var tab_id = $(this).attr('data-tab');

        $('ul.product-nav li a').removeClass('active');
        $('.switcher-tab').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });

    $(function(){
        $('nav').data('size','big');
    });

    $(window).scroll(function(){
        if($(document).scrollTop() > 30)
        {
            if($('nav').data('size') == 'big')
            {
                $('nav').data('size','small');
                $('nav').stop().animate({
                    height:'72px',
                    top: "0",
                    'line-height': '72px',
                },50);
                $('#intranext-logo').stop().animate({
                    width: '132px',
                    'margin-top': '15px',
                },50);
                $('.nav').stop().animate({
                    'margin-top': '0px',
                },50);
                $('.nav li a.active, .nav li a:hover').stop().animate({
                    'border-bottom-width': '0px',
                },50);
                $('nav').toggleClass('scroll-nav');
            }
        }
        else if ($(document).scrollTop() < 29)
        {
            if($('nav').data('size') == 'small')
            {
                $('nav').data('size','big');
                $('nav').stop().animate({
                    height:'125px',
                    top: "30",
                    'line-height': '75px'
                },50);
                $('#intranext-logo').stop().animate({
                    width: '195px',
                    'margin-top': '33px',
                },50);
                $('.nav').stop().animate({
                    'margin-top': '48px',
                },50);
                $('.nav li a.active, .nav li a:hover').stop().animate({
                    'border-bottom-width': '2px',
                },50);
                $('nav').toggleClass('scroll-nav');
            }
        }
    });


    if($(document).scrollTop() > 30)
    {
        if($('nav').data('size') == 'big')
        {
            $('nav').data('size','small');
            $('nav').stop().animate({
                height:'72px',
                top: "0",
                'line-height': '72px',
            },1);
            $('#intranext-logo').stop().animate({
                width: '132px',
                'margin-top': '15px',
            },1);
            $('.nav').stop().animate({
                'margin-top': '0px',
            },1);
            $('.nav li a.active, .nav li a:hover').stop().animate({
                'border-bottom-width': '0px',
            },1);
            $('nav').toggleClass('scroll-nav');
        }
    }


    $( ".menu-toggle" ).click(function(e) {
        e.preventDefault();
        $( ".mobile-menu" ).slideToggle('slow');
    });


});