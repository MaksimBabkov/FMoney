const COUNTER_CHANGE = 'COUNTER_CHANGE'


const initialState = {
    count: 5
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    }
}
export default countReducer;