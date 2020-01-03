export default {
	getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
  },
  convertHttps(url) {
    return url != null ? url.replace('http://', 'https://') : url;
  },
	parseObject(url){
      var obj = {};
      if(url.indexOf('?')!==-1){
        url = url.substring(url.indexOf('?')+1);
      }else{
        return ;
      }
      var arr = url.split('&');
      arr.forEach(function(val){
        var brr = val.split('=');
        obj[brr[0]] = brr[1];
      });
      return obj;
  },
  chLen(value){ //按照中文字符为标准
    let valueLength = 0;
    let chinese = /[\u4e00-\u9fa5]/;/*这是汉语的这则表达式*/
    for (let i =0;i<value.length;i++) {
          let temp = value.substring(i, i + 1); /* 获取一个字符 */
        if (chinese.test(temp)) { /* 判断是否为中文字符 */
            valueLength += 2;  /* 中文字符长度为2 */
        } else {
            valueLength += 1; /* 其他字符长度为1 */
        }
    }
    return Math.ceil(valueLength/2);
  },
  trim(value){
    return value.replace(/(^\s*)|(\s*$)/g,"");
  },
  uniqueArrWithTrim(arr){
    var hash=[];
    arr.forEach(item=>{
        let i = this.trim(item);
        if(i && hash.indexOf(i)<0){
            hash.push(i);
        }
    })
    return hash;
  },
  htmlspecialchars(str){
      str = str.replace(/\&/g, "&amp;");
      str = str.replace(/\"/g, "&quot;");
      str = str.replace(/\</g, "&lt;");
      str = str.replace(/\>/g, "&gt;"); 
      return str;
  },
  rehtmlspecialchars(str){
      str = str.replace(/\&lt\;/g, "<");
      str = str.replace(/\&gt\;/g, ">");
      str = str.replace(/\&quot\;/g, `"`);
      str = str.replace(/\&amp\;/g, "&");
      return str;
  },
  async getScrollTop() { //滚动条在Y轴上的滚动距离
    var scrollTop = 0;
    if(self!=top){ 
      //判断是否在iframe中-----在iframe中
    } else {
      scrollTop = document.documentElement.scrollTop;
    }
    return scrollTop;
  },
  async getWindowHeight(and_width) { //浏览器视口的高度
    var windowHeight = 0;
    var windowWidth = 0;
    windowHeight = document.documentElement.clientHeight;
    windowWidth = document.documentElement.clientWidth;
    if(and_width) {
      return {width:windowWidth, height:windowHeight}
    }
    return windowHeight;
  },
  randomChar(l = 13) {
    var x = '0123456789qwertyuioplkjhgfdsazxcvbnm';
    var tmp = '';
    var timestamp = new Date().getTime();
    for (var i = 0; i < l; i++) {
      tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
    }
    return timestamp + tmp;
  },
  deepCopy (obj, cache = []) {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }
    const hit = find(cache, c => c.original === obj)
    if (hit) {
      return hit.copy
    }
  
    const copy = Array.isArray(obj) ? [] : {}
    cache.push({
      original: obj,
      copy
    })
    Object.keys(obj).forEach(key => {
      copy[key] = this.deepCopy(obj[key], cache)
    })
    return copy
  },
  urlLimit: function(url) {
    if (/^http[s]?:\/\/(\w[\w\.]*\.)?weibo\.(com|cn)/.test(url)) {
        return true;
    }
    return false;
  },
  httpcheck(url){
    if(!/^(http|https):\/\//.test(url)){
      return false;
    }
    return true
  },
  debounce(func, wait, immediate) { // 防抖 —— 把多个顺序的调用合并成一次
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
  },
}
