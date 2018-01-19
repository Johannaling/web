/**
 * Created by Johnnaling on 2017/11/1.
 */
//封装函数，通过class的名字获取元素
function getByClassName(clsName,context){
    context=context||document;
    if(context.getElementsByClassName){//没有括号代表能力检测，是否能获取到ClassName
        return(context.getElementsByClassName(clsName));
    }
    else{
        var allList=document.getElementsByTagName('*');
        var result;
        for(var i=0;i<allList[i].length;i++){
            //暂时还不完善（indexOf只能判断是否含有这串字符不能判断全部），完整的需要用到正则表达式
            if(allList[i].className.indexOf(clsName)!=-1){
                result.push(allList[i]);
            }
        }
        return result;
    }
}


//找到elem的下一个兄弟元素 nodeType=1 （element 1 ;text  3）nodeType节点类型
function next(elem) {
    do{
        elem=elem.nextSibling;
    }
    while(elem && elem.nodeType!=1);
    return elem;
}


//找到elem的第一个孩子元素
function first(elem) {
    elem=elem.firstChild;
    return elem.nodeType==1 ? elem : next(elem);
}

//添加一条cookie
function addCookie(key,val,expires) {
    var str=key+'='+val;
    if(expires != undefined){
        var date=new Date();
        date.setDate(date.getDate()+expires);
        str+=':expires'+ date.toUTCString();
    }
    document.cookie=str;
}
//获取一条cookie
function getCookie(key) {
    var arr=document.cookie().split(';');
    for(var i=0;i<=arr.length;i++){
        var temp=arr[i].split('=');
        if(temp[0].trim()==key){
            return temp[1];
        }
    }
}

//删除一条cookie
function delCookie(key) {
    var date=new Date();
    date.setDate(date.getDate()-100);
    document.cookie=key+'=null;expires='+date.toUTCString();
}


//实现深拷贝
function clone(obj){
    var newObj = {};
    for(var p in obj){
        if(typeof obj[p] == 'object'){
            newObj[p] = clone(obj[p]);
        }else{
            newObj[p] = obj[p];
        }
    }
    return newObj;
}

//增加一个事件
function addEvent(elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    } else if (elem.attachEvent) {
        elem.fnxx = function () {
            handler.call(elem);
        };
        elem.attachEvent('on' + type, elem.fnxx);
    } else {
        elem['on' + type] = handler;
    }
}


//移除一个事件
function removeEvent(elem, type, handler) {
    if (elem.removeEventListener) {
        elem.removeEventListener(type, handler);
    } else if (elem.detachEvent) {
        elem.detachEvent('on' + type, elem.fnxx);
    } else {
        elem['on' + type] = null;
    }
}


//startsWidth
String.prototype.sw = function (str) {
    if (this.indexOf(str) == 0) {
        return true;
    }
    return false;
};
console.log(str.sw('hhello'));

//endsWidth
String.prototype.ew = function(str){
    if(this.indexOf(str) == this.length - str.length){
        return true;
    }
    return false;
};
console.log(str.ew('world1'));