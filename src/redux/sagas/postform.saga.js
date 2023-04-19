import axios from "axios"
import { takeLatest, put } from "redux-saga/effects"

function* postFormSaga() {
    yield takeLatest('ADD_PROFILE', postForm)
}

function* postForm(action) {
    console.log('Inside of postItem', action.payload)
    try {
        yield axios.post('/api/form', action.payload)
        yield put ({ type: 'FETCH_FORM'})

    } catch (error) {
        console.log('User PostForm request failed', error)
    }
}

export default postFormSaga;