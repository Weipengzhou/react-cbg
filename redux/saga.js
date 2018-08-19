import { call, put, takeLatest} from 'redux-saga/effects';
import * as apis from './api';
import { types } from './types';
import * as actions from './actions';
import {Toast} from 'antd-mobile'


function* indexBaojia({text}) {
    try {
        const result = yield call(apis.indexBaojia,text);
        console.log(result)

    } catch (err) {
        
     }
}




export default function* defaultSaga() {
    yield [
        takeLatest(types.Index_Baojia, indexBaojia),
       
    ];
}