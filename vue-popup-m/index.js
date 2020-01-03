import PopupComponent from "./vue-popup.vue"; // 引入先前写好的vue
var Popup = {};
//避免重复install，设立flag
Popup.installed = false;
Popup.install = function(Vue, options = {
    list:[],
    okText:'确定',
    cancelText:'取消',
    okColor:'#333',
    cancelColor:'#333',
    showOk:false, // 是否有确认按钮 默认不显示
    ok:()=>{},
    cancel:()=>{},
}) {
    if (Popup.installed) return;
    /*
     *  @param {
     *    list:[{
     *        color:'#333',    // 不传则默认显示'#333'
     *        text:'显示文本',  // 必填
     *        callback:()=>{}  // 回调函数
     *    },{...}]
     *   config:{}  
     * }
     *
    */
    Vue.prototype.$popup = (list,config = {}) => {
        config = {
            ...options,
            ...config,
            list,
        }
        // 如果页面有dialog则不继续执行
        if (document.querySelector('.vue-popup')) return;
        // 1、创建构造器，定义好提示信息的模板
        const dialogTip = Vue.extend(PopupComponent);
        let obj = new dialogTip();

        for (var property in config) {
            obj[property] = config[property];
        }

        //删除弹框  添加动画
        obj.removePopup = function() {
            document.body.removeChild(tpl);
        }

        //插入页面
        let tpl = obj.$mount().$el;
        document.body.appendChild(tpl);
        Popup.installed = true;
    };
};
// 自动安装  ，有了ES6就不要写AMD，CMD了
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Popup)
}

export default Popup