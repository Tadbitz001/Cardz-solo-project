import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects'

function* cardSaga () {
    yield takeLatest ('FETCH_CARD', fetchCardItems)
    yield takeLatest ('EDIT_CARD', editCard)
    yield takeLatest ('GET_CARD_ID', getCardId)
    yield takeLatest ('DELETE_CARD', deleteCard)
}

function* getCardId(action) {
    try {
        console.log('inside of getCardId', action.payload)
        const response = yield axios.get(`/api/card/${action.payload}`);
        yield put ({ type: 'SET_CARD_ID', payload: response.data})

    } catch (error) {
        console.log('Error in getCardId route', error)
    }

}

function* deleteCard (action) {
    console.log('inside of deleteCard', action.payload);
    try {
        yield axios.delete(`/api/card/${action.payload}`)
        console.log('this is delete/ action.payload.id', action.payload);
        yield put ({type: 'FETCH_CARD'})
    } catch (error) {
        console.log('Error in deleteSaga', error)
    }
}

function* editCard (action) {
    try {
        console.log('Inside of EditCard')
        yield axios.put(`/api/card/${action.payload.id}`, action.payload)
        yield put ({type: 'FETCH_CARD'}) // does not need a payload since it is a GET request to update DOM
    } catch (error) {
        console.log('Error in EditCard route', error)
    }
}

function* fetchCardItems () {
    try {
        console.log('inside of fetchCardItems')
        const response = yield axios.get('/api/card');
        yield put ({ type: 'SET_CARD', payload: response.data})

    } catch (error) {
        console.log('Error in fetchCard route', error)
    }

}


export default cardSaga;