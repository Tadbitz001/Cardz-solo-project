import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects'

function* searchSaga () {
    yield takeLatest ('SEARCH_FOR_CARD', searchForCard)

}

function* searchForCard(action) {
    console.log('inside of searchCard', action.payload)

    try {
        const search = yield axios.get(`/api/search/${action.payload}`);
        yield put ({ type: 'SET_CARD', payload: search.data})

    } catch (error) {
        console.log('Error in searchCard route', error)
    }

}



export default searchSaga;