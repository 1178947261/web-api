$(function () {
    var map = new BMap.Map("wuhou");
    map.centerAndZoom(new BMap.Point(116.573199, 40.022324), 25);//根据坐标初始化地图
    map.enableScrollWheelZoom(true);
    map.addControl(new BMap.NavigationControl()); //平移缩放控件
    map.addControl(new BMap.ScaleControl()); //比例尺
    map.addControl(new BMap.OverviewMapControl()); //缩略地图
    map.addControl(new BMap.MapTypeControl()); //地图类型
    map.setCurrentCity("北京市"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
    var marker = new BMap.Marker(new BMap.Point(116.573199, 40.022324),25); // 创建标注
    map.addOverlay(marker); // 将标注添加到

    // var map = new BMap.Map("qingyang");
    // map.centerAndZoom(new BMap.Point(104.006486, 30.670671), 25);
    // map.enableScrollWheelZoom(true);
    // var marker = new BMap.Marker(new BMap.Point(104.006486, 30.670671));
    // map.addOverlay(marker);

    $('.lunbo-m ul li').css('width', $('.lunbo-m').width() + 'px');
    $('.lunbo-m ul').css('width', $('.lunbo-m ul li').length * $('.lunbo-m ul li').width() + 'px')


    var lunbo1_index = 1;
    // var lunbo2_index = 1;
    var lunbo1_timer = setInterval(lunbom1, 3000)
    // var lunbo2_timer = setInterval(lunbom2, 3000)
    $(window).resize(function () {
        $('.lunbo-m ul li').css('width', $('.lunbo-m').width() + 'px');
        $('.lunbo-m ul').css('width', $('.lunbo-m ul li').length * $('.lunbo-m ul li').width() + 'px')
        lunbo_m1();
        // lunbo_m2();
    })

    function lunbom1() {
        if (lunbo1_index == $('.lunbo-m1 ul li').length) lunbo1_index = 0;
        $('.lunbo-m1 ol li').removeClass('active');
        $('.lunbo-m1 ol li').eq(lunbo1_index).addClass('active');
        $('.lunbo-m1 ul').animate({
            left: -lunbo1_index * $('.lunbo-m1 ul li').width() + 'px'
        })
        lunbo1_index++;
    }
    function lunbo_m1() {
        if ($(window).width() <= 768) {
            clearInterval(lunbo1_timer)
            $('.lunbo-m1 ul').css('left','0px');
            $('.lunbo-m1 ol li').removeClass('active');
            $('.lunbo-m1 ol li').eq(0).addClass('active');
            lunbo1_timer = setInterval(lunbom1, 3000)
        } else {
            clearInterval(lunbo1_timer)
        }
    }
    lunbo_m1();

    // function lunbom2() {
    //     if (lunbo2_index == $('.lunbo-m2 ul li').length) lunbo2_index = 0;
    //     $('.lunbo-m2 ol li').removeClass('active');
    //     $('.lunbo-m2 ol li').eq(lunbo2_index).addClass('active');
    //     $('.lunbo-m2 ul').animate({
    //         left: -lunbo2_index * $('.lunbo-m2 ul li').width() + 'px'
    //     })
    //     lunbo2_index++;
    // }
    // function lunbo_m2() {
    //     if ($(window).width() <= 768) {
    //         clearInterval(lunbo2_timer)
    //         $('.lunbo-m2 ul').css('left','0px');
    //         $('.lunbo-m2 ol li').removeClass('active');
    //         $('.lunbo-m2 ol li').eq(0).addClass('active');
    //         lunbo2_timer = setInterval(lunbom2, 3000)
    //     } else {
    //         clearInterval(lunbo2_timer)
    //     }
    // }
    // lunbo_m2();
})