const initialDrumMachineState = {
    matrix: [
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

const drumMachineReducer = (state = initialDrumMachineState, action) => {
    switch (action.type) {
        case 'SET_DRUMMACHINE_MATRIX':
            return {
                ...state,
                matrix: action.payload
            }
        case 'SET_DRUMMACHINE_CHANNELS_VOLUMEN':
            return {
                ...state,
                ch1Volumen: action.payload[0],
                ch2Volumen: action.payload[1],
                ch3Volumen: action.payload[2],
                ch4Volumen: action.payload[3],
                ch5Volumen: action.payload[4]
            }
        default:
            return state
    }
}

export default drumMachineReducer;

