/**
 * Created by Johnnaling on 2018/1/17.
 */

$(function(){
//导航菜单
    $('#nav-menu').on('click',function () {
        $('#wrapper').css('display','block');
        $('#nav-next-menu').animate({
            width:'270px'
        })
    });
    $('#wrapper').on('click',function () {
        $('#wrapper').css('display','none');
        $('#nav-next-menu').animate({
            width:'0px'
        })
    })
});


