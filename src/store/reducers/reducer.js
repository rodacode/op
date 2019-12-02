import { createStore } from 'redux';

const initialState = {
    isPlaying: false,
    bpm: 120,
    userName: 'Nico'
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'PLAY':
            return {
                ...state,
                isPlaying:!state.isPlaying
            }
        case 'STOP':
        return {
            ...state,
            isPlaying:!state.isPlaying
        }
        case 'SET_BPM':
            return {
                ...state,
                bpm: action.payload
            }
        default:
            return state
    }
}
export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
