import { call, put, takeLatest} from 'redux-saga/effects';

import { types } from './types';
import * as actions from './actions';



function* indexBaojia(e) {
    try {
       
    console.log(e)
      
        
       
    } catch (err) {
        
     }
}


export default function* defaultSaga() {
    yield [
        takeLatest(types.Index_Baojia, indexBaojia),
       
    ];
}