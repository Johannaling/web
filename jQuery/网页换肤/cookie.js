/**
 * Created by Johnnaling on 2017/11/21.
 */
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