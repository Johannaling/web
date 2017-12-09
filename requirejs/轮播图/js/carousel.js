/**
 * Created by Johnnaling on 2017/12/9.
 */
define(['jquery'],function ($) {
    function Carousel() {
        this.$container=$('<div class="carousel-container"></div>');
        this.$imgs=$('<div class="carousel-imgs"></div>');
        this.$nav=$('<ul class="carousel-nav"></ul>');
        this.$arrows=$('<div class="carousel-arrows"></div>');
        this.$prev=$('<span>&lt;</span>');
        this.$next=$('<span>&gt;</span>');
        this.defaultSettings={
            imgArr: [],
            speed: 1000,
            buttonStyle: 'square', //circle
            selector: document.body
        };
        this.nowIndex=0;
        this.timer=null;
    }
    Carousel.prototype.init=function (settings) {
        $.extend(this.defaultSettings,settings);
        this.$container.append(this.$imgs).append(this.$nav).append( this.$arrows).appendTo(this.defaultSettings.selector);
        this.$arrows.append(this.$prev).append(this.$next);
        for (var i=0;i<this.defaultSettings.imgArr.length;i++){
            this.$imgs.append('<img src="'+this.defaultSettings.imgArr[i]+'"/>');
            this.$nav.append('<li>'+(i+1)+'</li>');
        }
        $('img:eq(0)',this.$imgs).add('li:eq(0)',this.$nav).addClass('selected');
        if(this.defaultSettings.buttonStyle=='circle'){
            $('li',this.$nav).css({
                borderRadius:'50%'
            }).html('')
        }
        var that=this;
        $('li',this.$nav).on('mouseover',function () {
            that.nowIndex=$(this).index();
            changeImg();
        });
        this.$prev.on('click',function () {
            that.nowIndex--;
            if(that.nowIndex<=-1){
                that.nowIndex=that.defaultSettings.imgArr.length-1;
            }
            changeImg();
        });
        this.$next.on('click',function () {
            that.nowIndex++;
            if(that.nowIndex>=that.defaultSettings.imgArr.length){
                that.nowIndex=0;
            }
            changeImg();
        });
        play();
        this.$container.hover(function () {
            clearInterval(that.timer)
        },function () {
           play();
        });
        function play() {
            that.timer=setInterval(function () {
                that.$next.trigger('click');
            },that.defaultSettings.speed);
        }

        function changeImg() {
            $('li',that.$nav).eq(that.nowIndex).add($('img',that.$imgs).eq(that.nowIndex)).addClass('selected').siblings().removeClass('selected')
        }
    };
    return Carousel;
});