const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        console.log("ADD", action)
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }
    if (action.type === 'SUBTRACT') {
        console.log("SUBTRACT", action)
        return {
            ...state,
            counter: state.counter - action.value 
        }
    }
    return state;
};

export default reducer;