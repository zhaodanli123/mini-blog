import loadingComponent from './vue-loading';

var Loading = {};

Loading.installed = false;
Loading.install = (Vue, options) => {
  if (Loading.installed) return;
  Vue.prototype.$vloading = (selector, text) => {
    //添加实例方法
    //如果页面上已经存在则不再添加
    if (document.querySelector('.vue-loading')) return;
    var loadext = Vue.extend(loadingComponent); //使用基础Vue构造器创建一个子类，参数是组件选项的对象
    var obj = new loadext(); //创建loadext实例
    obj.text = text;
    //使用$mount手动挂载到一个元素上，这个组件会替代挂载到的元素
    //如果没有提供element，模板将被渲染为文档之外的元素。并且你必粗使用原生DOM API把它插入文档中
    document.querySelector(`${selector}`).appendChild(obj.$mount().$el); //挂载到文档中
    Loading.installed = true;
  };
  Vue.prototype.$vloading.remove = selector => {
    if (document.querySelector('.vue-loading')) {
      document.querySelector(`${selector}`).removeChild(document.querySelector('.vue-loading'));
    }
  };
};
export default Loading;
