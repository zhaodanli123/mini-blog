(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            if(clientWidth >= 750) {
                docEl.style.fontSize = '47px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
			//获取当前窗口高度
			let forwardmodalElem = doc.querySelector('.forwardmodal')
			if(forwardmodalElem){
				forwardmodalElem.style.height = win.innerHeight + 'px';
				forwardmodalElem.style.width = win.innerWidth + 5 + 'px';
			}
        };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);