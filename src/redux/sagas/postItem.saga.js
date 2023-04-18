import axios from "axios"
import { takeLatest, put } from "redux-saga/effects"

function* postSaga() {
    yield takeLatest('ADD_ITEM', postItem)
}


function* postItem(action) {
    console.log('Inside of postItem', action.payload)
    try {
        yield axios.post('/api/card', action.payload)
        yield put ({ type: 'FETCH_CARD'})

    } catch (error) {
        console.log('User Post request failed', error)
    }
}

export default postSaga;