import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects'

function* cardSaga () {
    yield takeLatest ('FETCH_CARD', fetchCardItems)
    // yield takeLatest ('EDIT_CARD', editCard)
    yield takeLatest ('EDIT_CARD_ID', editCardId)

}

function* editCardId(action) {
    try {
        console.log('inside of editCardId', action.payload.id)
        const response = yield axios.get(`/api/card/${action.payload.id}`);
        yield put ({ type: 'SET_CARD_ID', payload: response.data})

    } catch (error) {
        console.log('Error in editCardId route', error)
    }

}

// function* editCard (action) {
//     try {
//         console.log('Inside of EditCard')
//         yield axios.put(`/api/card/${action.payload.id}`, action.payload)
//         yield put ({type: 'FETCH_CARD'}) // does not need a payload since it is a GET request to update DOM
//     } catch (error) {
//         console.log('Error in EditCard route', error)
//     }
// }

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