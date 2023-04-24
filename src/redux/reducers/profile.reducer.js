const profileReducer = (state =[], action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            const lastItem = action.payload[action.payload.length - 1]
            return {...state, ...lastItem};
        default:
            return state;
    }
}

export default profileReducer;