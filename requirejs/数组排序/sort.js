/**
 * Created by Johnnaling on 2017/12/3.
 */
define(['isArray'],function (isArray) {
   function sortArr(arr){
       if(isArray(arr)){
            return arr.sort(function (a,b) {
                return a-b;
            })
       }else{
            return '你输入的数不是一个数组'
       }
   }
    return sortArr;
});