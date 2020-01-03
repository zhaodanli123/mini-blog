import DialogComponent from "./vue-dialog.vue"; // 引入先前写好的vue
var Dialog = {};
//避免重复install，设立flag
Dialog.installed = false;
Dialog.install = function(Vue, options = {
    okText:'确定',
    cancelText:'取消',
    okColor:'#FF8200',
    cancelColor:'#636363',
    thirdColor:'#f46969',
    direction:'row',   //默认为横向显示 纵向：column
    title:'',  // 标题 非必须
    noOk:false, // 是否有确认按钮
    thirdText:'',  // 按钮三
    ok:()=>{},
    cancel:()=>{},
    third:()=>{},
    

}) {
    if (Dialog.installed) return;
    var obj;
    Vue.prototype.$dialog = (text,config = {}) => {
        config = {
            text,
            ...options,
            ...config,
        }
        // 如果页面有dialog则不继续执行
        if (document.querySelector('.vue-dialog')) return;
        // 1、创建构造器，定义好提示信息的模板
        const dialogTip = Vue.extend(DialogComponent);
        obj = new dialogTip();

        for (var property in config) {
            obj[property] = config[property];
        }

        //删除弹框
        obj.removeDialog = function() {
            document.body.removeChild(tpl);
        }

        //插入页面
        let tpl = obj.$mount().$el;
        document.body.appendChild(tpl);
        Dialog.installed = true;
    };
};
// 自动安装  ，有了ES6就不要写AMD，CMD了
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Dialog)
}

export default Dialog