var scrollFunc = function (e) {
    let nav = document.getElementById('nav');

    e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            nav.style.position = "fixed";
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            nav.style.position = "absolute";
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail < 0) { //当滑轮向上滚动时
            nav.style.position = "fixed";
        }
        if (e.detail > 0) { //当滑轮向下滚动时
            nav.style.position = "absolute";
        }
    }
}
document.addEventListener('DOMMouseScroll', scrollFunc, false);
document.onmousewheel = scrollFunc;  
