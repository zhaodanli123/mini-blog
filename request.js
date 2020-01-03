/**
 * @Description
 *     ajax请求，封装axios
 * @param {
 *     url: '',          请求地址
 *     method: 'get',    请求方式，默认get
 *     params: {},       请求参数
 * } opts 配置
 * @example
 *     this.$get('请求地址', { name: '参数一' });
 *     this.$get({url: '请求地址', params: {}});
 *     this.$post('请求地址', { name: '参数一' });
 *     this.$post({url: '请求地址', params: {}});
 *     this.$ajax('请求地址', { method: 'get', params: {} });
 *     this.$ajax({url: '请求地址', method: 'get', params: {} });
 */

import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';

const NODE_ENV = process.env.NODE_ENV;
let Request = {}, ajQueue = [], mock = {};
axios.defaults.baseURL = '';

//http请求拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// http响应拦截器
axios.interceptors.response.use(
    res => {
        let req_url = res.config.url;
        res = res.data;
        // TODO: 统一接口格式并做处理
        if (res.code != 0) {
            return res;
        }
        return res.data;
    },
    error => {
        return Promise.reject(error);
    }
);

async function getAxiosData(opts) {
    // 给请求加锁，如果地址相同，则等接口有返回后解锁
    if (ajQueue.indexOf(opts.url) > -1) return;
    ajQueue.push(opts.url);

    switch (opts.method) {
        case 'post':
        case 'POST': {
            let postRes = await axios.post(opts.url, qs.stringify(opts.params));
            ajQueue.splice(ajQueue.indexOf(opts.url), 1);
            if(!postRes) return Promise.reject('error');
            return postRes;
        }
            
        case 'get':
        case 'GET':
        default: {
            let getRes = await axios.get(opts.url, { params: opts.params });
            ajQueue.splice(ajQueue.indexOf(opts.url), 1);
            if(!getRes) return Promise.reject('error');
            return getRes;
        }
    }
}

let parseArguments = function(url = '', opts = {}, method) {
    // console.log(url, opts, method);
    if (!url || (typeof url === 'object' && !url.url)) {
        console.error('请设置接口地址');
        return;
    }
    if (typeof url === 'string') { // 如果参数是(url, params)方式
        opts = {
            params: opts,
            url: url,
            method: method || 'get'
        }
    } else { // 如果参数是(opts)方式
        opts = url;
    }
    
    opts.method = opts.method || 'get'; // 默认用get方式请求
    return opts;
};

Request.install = function(Vue, config) {
    mock = config.mock || {};
    // get方法
    Vue.prototype.$get = async function (_url = '', _opts = {}) {
        // console.log('Vue.prototype.$get', _url, _opts);
        let opts = parseArguments(_url, _opts, 'get');
        let res = await getAxiosData(opts);
        return res || {};
    };
    // post方法
    Vue.prototype.$post = async function (_url = '', _opts = {}) {
        // console.log('Vue.prototype.$post', _url, _opts);
        let opts = parseArguments(_url, _opts, 'post');
        // console.log(opts);
        let res = await getAxiosData(opts);
        return res || {};
    };
    // ajax方法
    Vue.prototype.$ajax = async function (_url = '', _opts = {}) {
        // console.log('Vue.prototype.$ajax');
        let opts = parseArguments(_url, _opts);
        let res = await getAxiosData(opts);
        return res || {};
    };
};

export default Request;
