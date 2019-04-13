var oP = document.getElementsByTagName('p')[0];
var oSpan = document.getElementsByTagName('span')[0];
var oA = document.getElementsByTagName('a')[0];
var str = oSpan.innerHTML;//获取文字内容，方便隐藏和显示
var onOff = true;//开关

oA.onclick = function(){
    if(onOff){
        oSpan.innerHTML = str.substring(0,18);
        oA.innerHTML = 'More Details';
    }else{
        oSpan.innerHTML = str;
        oA.innerHTML = 'Hide Details';                  
    }
    onOff = !onOff;//每次点击之后都取反
};