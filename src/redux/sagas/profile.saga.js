import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";


function* profileSaga () {
    yield takeLatest ('FETCH_FORM', fetchForm)
}

function* fetchForm () {
    try {
        console.log('inside of fetchForm')
        const response = yield axios.get('/api/form');
        yield put ({ type: 'SET_PROFILE', payload: response.data})
    } catch (error) {
        console.log('Error in fetchForm GET', error)
    } 
}

export default profileSaga;