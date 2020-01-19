'use strict';

// 解决ios12上软键盘顶起页面后隐藏不回弹的问题
export default function viewBack() {
    console.log('viewback1');
    var ua = navigator.userAgent;
    var weiboInfo = ua.match(/weibo__([\d\.]+)/i);
    var weiboVersion = weiboInfo && weiboInfo[1] ? weiboInfo[1] : 0;
    weiboVersion = parseFloat(weiboVersion) || 0;

    var iosInfo = ua.match(/CPU iPhone OS ([\d_]+)/i);
    var IosVersion = iosInfo && iosInfo[1] ? iosInfo[1] : 0;
    IosVersion = parseFloat(IosVersion) || 0;

    var currentPosition, timer;
    var speed = 1; // 页面滚动距离

    if (weiboVersion > 8.11 && IosVersion === 12) {   //ios12，且微博版本高于8.11
        console.log('viewbac2');
        timer = setInterval(function(){
            currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            currentPosition -= speed; 
            window.scrollTo(0, currentPosition); // 页面向上滚动
            currentPosition += speed; //speed变量
            window.scrollTo(0, currentPosition); // 页面向下滚动
            clearInterval(timer);
            console.log('viewbac3');
        },1);
    }
}