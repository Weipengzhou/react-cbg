import {types} from './types';
export const indexBaojia = text => ({ type: types.Index_Baojia, text })
export const defaultCity = text=>({type:types.Default_City,text}) //存入redux城市
export const yanFang = text=>({type:types.Yan_Fang,text})  // 免费验房
export const getCode =text=>({type:types.Get_Code,text})   //获取验证码
export const cunCode =text=>({type:types.Cun_Code,text})   //存验证码
export const submitBaojia=text=>({type:types.Submit_Baojia,text}) //在线报价
export const Get_Company=text=>({type:types.Get_Company,text})   //切换装修公司分页面
