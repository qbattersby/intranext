$(document).ready(function(){

    $('ul.product-nav li a').click(function(e){
        e.preventDefault();
        var tab_id = $(this).attr('data-tab');

        $('ul.product-nav li a').removeClass('active');
        $('.switcher-tab').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })

})