// mixin写法

const scroll_bottom = {
    mounted(){
        this.$nextTick(()=>{
            var myEfficientFn = debounce(this.scrollEvent , 30);
             this.scrollElem.onscroll = () => {
                myEfficientFn(this.scrollElem)
            }
        })
    },
    methods:{
        debounce(func, wait, immediate) { // 防抖
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
        getScrollTop(elem) { //滚动条在Y轴上的滚动距离
            var scrollTop = elem.scrollTop;
            return scrollTop;
        },
        getScrollHeight(elem) { //元素总高度
            var scrollHeight = elem.scrollHeight;
            return scrollHeight;
        },
        getElemHeight(elem) { //元素视口的高度
            var elemHeight = elem.clientHeight;
            return elemHeight;
        },
        scrollEvent(elem) {  // 滚动中的真正的操作 距离底部10px
            if (this.getScrollTop(elem) + this.getElemHeight(elem) + 10 >= this.getScrollHeight(elem)) {
                this.scroll2bottom();  // 触发滚动到底部事件
            }
        }
    }
}

export default scroll_bottom

/*
 * 页面中定义：
 * 1 scroll2bottom()方法，监听滚动到底部事件
 * 2 scrollElem变量，保存要加监听的dom元素
 */

