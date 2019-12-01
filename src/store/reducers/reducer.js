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
                isPlaying:true
            }
        case 'STOP':
        return {
            ...state,
            isPlaying:false
        }
        default:
            return state
    }
}
export const store = createStore(
    reducer,
    initialState
)
