import { combineReducers, createStore } from 'redux';
import drumMachineReducer from './drumMachineReducer';

const initialState = {
    isPlaying: false,
    bpm: 130,
    userName: 'Nico',
}

const mainReducer = (state = initialState, action) => {
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
        default:
            return state
    }
}

export default mainReducer;

const rootReducer = combineReducers({
    settings: mainReducer,
    drumMachine: drumMachineReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
