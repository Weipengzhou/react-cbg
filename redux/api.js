import 'url-search-params-polyfill';
import 'isomorphic-unfetch';
function parseJSON(response) {
    return response.json();
}
function obj2String(obj) {
    return new URLSearchParams(obj).toString()
  }
function get(url,data) {
    const defaultOptions = {
        method: 'GET',
    };
    return fetch(url+"?"+obj2String(data), defaultOptions)
        .then(parseJSON)
        .catch(() => {
            throw new Error('error');
        });
}
function post(url,data) {
    const defaultOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body:data,
    };

    return fetch(url, defaultOptions)
    .then((res)=>{return res.json()})
    .catch(() => {
      throw new Error('error');
    });
}

const url = 'http://www.gulugl.com/api/'

//通过ip获取定位信息
export function citySelect(e) {
    return get(url+'bddt')
}
//获取首页装修公司信息
export function indexCompany(e) {
     return get(url+'gsl',e)

}
//首页报价接口
export function indexBaojia(e){
    return get(url+'',e)
}
