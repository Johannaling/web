/**
 * Created by Johnnaling on 2017/12/3.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1'
    }
});
require(['jquery','dialog'],function ($,Dialog) {
    $('#open').on('click',function () {
        var settings = {
            width: 300,
            height: 200,
            title: '注册',
            content: 'reigist.html'
        };
        var d1 = new Dialog();
        d1.open(settings);
    })
});