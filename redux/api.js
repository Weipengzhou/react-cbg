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
        body:obj2String(data),
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
    return get(url+'baojia',e)
}

//免费验房
export function yanFang(e){
    return get(url+'yanfang',e)
}


//获取验证码
export function getCode(e){
    return post(url+'sms',e)
}

//报价提交
export function submitBaojia(e){
    return post(url+'offer',e)
}

//获取装修公司列表菜单

export function getCompanyList(e){
    return get(url+'company',e)
}

//获取装修公司详情页主页数据

export function getCompanyInfo(e){
    return get(url+'companydetail',e)
}

//装修公司介绍页
export function getCompanyAbout(e){
    return get(url+'companyintro',e)
}

//获取装修公司效果图列表
export function getCompanyXgt(e){
    return get(url+'case',e)
}

//获取装修公司设计师列表
export function getCompanyDesign(e){
    return get(url+'companydesigners',e)
}

//获取设计师详情页
export function getDesign(e){
    return get(url+'designerdetail',e)
}

//获取工地列表
export function getGongdilist(e){
    return get(url+'gongdi',e)
}

//获取工地详情页信息
export function getGongdi(e){
    return get(url+'gddetail',e)
}

//获取百科，资讯，攻略信息列表
export function getBaike(e){
    return get(url+'wzl',e)
}
//获取百科，资讯，攻略列表数据

export function getList(e){
    return get(url+'articleslist',e)
}
//获取文章详情页内容
export function getArticle(e){
    return get(url+'wzdetail',e)
}

//获取效果图分类
export function getXgt(e){
    return get(url+'xgtc')
}
//获取效果图列表
export function getXgtList(e){
    return get(url+'xgtl')
}

//获取效果图详情页
export function getImg(e){
    return get(url+'xgts',e)
}

