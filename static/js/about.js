$(function(){
    var lunbo_index = 1;
    function lunboList(){
        $('.lunbo-container ul li').css('width',$('.lunbo-container').width() + 'px');
        $('.lunbo-container ul').css('width',$('.lunbo-container ul li').width() * $('.lunbo-container ul li').length + 'px');
    }
    function lunbo(){
        if (lunbo_index == $('.lunbo-container ul li').length) lunbo_index = 0;
        $('.lunbo-container ol li').removeClass('active');
        $('.lunbo-container ol li').eq(lunbo_index).addClass('active');
        $('.lunbo-container ul').animate({
            left:-$('.lunbo-container ul li').width() * lunbo_index + 'px'
        })
        lunbo_index++;
    }
    lunboList();
    $(window).resize(function(){
        lunboList();
    })
    var timer = setInterval(lunbo,3000);
    $(".lunbo-container ol li").click(function(){
        clearInterval(timer);
        lunbo_index = $(this).index();
        lunbo();
        timer = setInterval(lunbo,3000);
    })
})