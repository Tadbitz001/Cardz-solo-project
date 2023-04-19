import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects'

function* cardSaga () {
    yield takeLatest ('FETCH_CARD', fetchCardItems)
}

function* fetchCardItems () {
    try {
        console.log('inside of fetchCardItems')
        const response = yield axios.get('/api/card');
        yield put ({ type: 'SET_CARD', payload: response.data})

    } catch (error) {
        console.log('Error in fetchCard GET', error)
    }

}




export default cardSaga;