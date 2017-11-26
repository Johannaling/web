/**
 * Created by Johnnaling on 2017/11/25.
 */
$(function () {
//输入框
    $(':input').on('focus',function () {
        $(this).addClass('focus').val(this.value==this.defaultValue?this.value='':this.value);
    }).on('blur',function () {
        $(this).removeClass('focus').val(this.value==''?this.value=this.defaultValue:this.value);
    });
//换肤
    var skin=$.cookie('skin');
    if (skin){
        changeSkin();
    }
    $('#skin>li').on('click',function () {
        skin=this.id;
        $.cookie('skin',skin,{expires:30});
        changeSkin();
    });
    function changeSkin(){
        $('#'+skin).addClass('selected').siblings().removeClass('selected');
        $('#cssfile').attr('href','styles/skin/'+skin+'.css');
    }

//导航菜单
    $('#nav li').hover(function () {
        $(this).children('.jnNav').show();
    },function () {
        $(this).children('.jnNav').hide();
    });


//hot图标
    $('#jnCatalog .promoted').append('<span class="hot"></span>');
//淡出轮播图
    var $imgs=$('#JS_imgWrap img');
    var $a=$('#jnImageroll div a');
    var iNowIndex=0;
    var timer;
    $imgs.each(function (index,elem) {
        $(elem).css('zIndex',function () {
            return $imgs.length-index;
        });
    });
    $('#jnImageroll>div').css('zIndex',$imgs.length);
    $('#jnImageroll div a').on('mouseover',function () {
        iNowIndex=$(this).index();
        changeImg();
    });
    play();
    $('#jnImageroll').hover(function () {
        clearInterval(timer);
    },function () {
        play();
    });

    function play() {
        timer=setInterval(function () {
            iNowIndex++;
            if (iNowIndex>=$a.length){
                iNowIndex=0;
            }
            changeImg();
        },2000);

    }
    function changeImg() {
        $($a[iNowIndex]).addClass('chos').siblings().removeClass('chos');
        $imgs.eq(iNowIndex).stop().fadeIn().siblings().stop().fadeOut();
    }


//tooltip
    tooltip("#jnNoticeInfo a");
    tooltip("#jnCatalog a");

    function tooltip(selector) {
        $(selector).hover(function () {
            this.tempTitle=$(this).attr('title')!=undefined?$(this).attr('title'):$(this).text();
            $('<div id="tip"></div>').text(this.tempTitle).appendTo($('body'));
            $(this).removeAttr('title');
           /* $(this).attr('title').hide();*/
        },function () {
            $(this).attr('title',this.tempTitle);
            $('#tip').remove();
        }).on('mouseover',function (e) {
            $('#tip').offset({
                top:e.pageY+15,
                left:e.pageX+15
            })
        })
    }


//品牌活动
    $('#jnBrandTab li').on('mouseover',function () {
        $(this).addClass('chos').siblings().removeClass('chos');
        $('#jnBrandList').stop().animate({
            left:-$('#jnBrandList li').innerWidth()*4*$(this).index()
        })
    })


});

