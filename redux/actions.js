import {types} from './types';
export const indexBaojia = text => ({ type: types.Index_Baojia, text })
export const citySelect = text=>({type:types.CITY_SELECT,text}) //发起判断城市请求
export const cityIndex = text=>({type:types.CITY_INDEX,text}) //存入redux城市