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