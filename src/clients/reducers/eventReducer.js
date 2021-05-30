const eventReducer = (state = [], action) => {
    switch (action.type) {
        case 'Events': {
            return state.concat(action.payload)
        }
        default: {
            return [].concat(state)
        }
    }

}
export default eventReducer