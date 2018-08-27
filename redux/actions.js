import {types} from './types';
export const indexBaojia = text => ({ type: types.Index_Baojia, text })
export const defaultCity = text=>({type:types.DEFAUTL_CITY,text}) //存入redux城市
export const yanFang = text=>({type:types.Yan_Fang,text})  // 免费验房
export const getCode =text=>({type:types.Get_Code,text})   //获取验证码
export const cunCode =text=>({type:types.Cun_Code,text})   //存验证码
export const submitBaojia=text=>({type:types.Submit_Baojia,text}) //在线报价
export const Get_Company=text=>({type:types.Get_Company,text})   //切换装修公司分页面
export const Get_Img =text=>({type:types.Get_Img,text})    //获取效果图
export const Save_Img=text=>({type:types.Save_Img,text})   //存效果图到redux
export const getImgLength=text=>({type:types.Get_Img_Length,text}) // 获取效果图数组长度
export const setImgLength=text=>({type:types.Set_Img_Length,text})  //设置效果图

export const Com_Get_Img =text=>({type:types.Com_Get_Img,text})    //公司获取效果图
export const Com_Save_Img=text=>({type:types.Com_Save_Img,text})   //公司存效果图到redux
export const Com_getImgLength=text=>({type:types.Com_Get_Img_Length,text}) // 公司获取效果图数组长度
export const Com_setImgLength=text=>({type:types.Com_Set_Img_Length,text})  //公司设置效果图
