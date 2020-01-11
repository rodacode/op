import { createStore } from 'redux';

const initialState = {
    isPlaying: false,
    bpm: 130,
    userName: 'Nico',
    drumMachineMatrix: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]],
    ch1Volumen: 0.5,
    ch2Volumen: 0.7,
    ch3Volumen: 0.8,
    ch4Volumen: 0.7,
    ch5Volumen: 0.8,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'PLAY':
            return {
                ...state,
                isPlaying: !state.isPlaying
            }
        case 'STOP':
            return {
                ...state,
                isPlaying: !state.isPlaying
            }
        case 'SET_BPM':
            return {
                ...state,
                bpm: action.payload
            }
        case 'SET_MATRIX':
            return {
                ...state,
                drumMachineMatrix: action.payload
            }
        case 'SET_VOLUMEN':
            return {
                ...state,
                ch1Volumen: action.payload
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
