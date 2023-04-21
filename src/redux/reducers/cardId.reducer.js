const cardIdReducer = (state ={}, action) => {
    switch (action.type) {
        case 'SET_CARD_ID':
            console.log('this is cardidReducer', action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default cardIdReducer;