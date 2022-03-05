import {put,takeEvery} from 'redux-saga/effects'
import { plusvalue,minusvalue } from '../actions/actions'
import { ASYNC_MINUS_VALUE, ASYNC_PLUS_VALUE } from '../actions/actionSaga'
import { PLUS_VALUE,MINUS_VALUE } from '../actions/actions'


const delay = (ms) => new Promise(res => setTimeout(res, ms))




function* plusWorker(payload) {
    yield delay(1000)
    yield put (plusvalue(payload))
    console.log('hjhj')
}

function* minusWorker(payload) {
    yield delay(1000)
    yield put (minusvalue(payload))
    console.log('hnhn')

}





export function*  countWatcher(){
    yield takeEvery(ASYNC_PLUS_VALUE,plusWorker)
    yield takeEvery(ASYNC_MINUS_VALUE,minusWorker)
}




