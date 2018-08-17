import { call, put, takeLatest} from 'redux-saga/effects';
import * as apis from './api';
import { types } from './types';
import * as actions from './actions';
import {Toast} from 'antd-mobile'


function* indexBaojia(e) {
    try {
       
      
    } catch (err) {
        
     }
}
function* citySelect(e) {
    try {
        const result = yield call(apis.citySelect);
        if(result.code==1){
            yield put(actions.cityIndex(result.city))
        }else{
            Toast.fail('服务器错误 !!!', 1);
        }
    } catch (err) {
        Toast.fail('服务器错误 !!!', 1);
     }
}
function* indexCompany({text}) {
    try {
        const result = yield call(apis.indexCompany,text);
        if(result.code==1){
            yield put(actions.indexCompanySave(result.city))
        }else{
            Toast.fail('服务器错误 !!!', 1);
        }
    } catch (err) {
       
        Toast.fail('服务器错误 !!!', 1);
     }
}



export default function* defaultSaga() {
    yield [
        takeLatest(types.Index_Baojia, indexBaojia),
        takeLatest(types.CITY_SELECT, citySelect),
        takeLatest(types.INDEX_COMPANY, indexCompany),
       
    ];
}