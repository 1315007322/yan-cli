
import { createStore } from 'redux'

function counterReducer(state = { them: localStorage.getItem('them') }, action) {
    switch (action.type) {
        case 'LightThem':
            localStorage.setItem("them", 'LightThem')
            return { them: "LightThem" }
        case 'darkLight':
            localStorage.setItem("them", 'darkLight')
            return { them: "darkLight" }
        default:
            return state
    }
}


let store = createStore(counterReducer)


export default store;