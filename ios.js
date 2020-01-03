/* 
 * 来判断该用户是何种机型
 */
! function() {
    var b, d = navigator.userAgent.toLowerCase(),
        k = document.documentElement,
        c = parseInt(k.clientWidth);
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || d.indexOf("like mac os x") > 0) {
        var f = /os [\d._]*/gi,
            j = d.match(f);
        b = (j + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")
    }
    var g = b + "";
    "undefined" != g && g.length > 0 && (b = parseInt(g),
            b >= 8 && (375 == c || 667 == c || 320 == c || 568 == c || 480 == c) ? k.className = "iosx2" : (b >= 8 && 414 == c || 736 == c) && (k.className = "iosx3")),
        /(Android)/i.test(navigator.userAgent) && (k.className = "android")
}(window);