import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import DrumMachine from '../components/drumMachine/DrumMachine';
import { Provider } from 'react-redux'
import { initialDrumMachineState, drumMachineReducer } from './store/reducers/rootReducer'
import Nexus from "nexusui";


afterEach(cleanup);

const store = () => null;

test('DrumMachine to be mounted', () => {
    const { getByTestId } = render(<Provider store={store}><DrumMachine /></Provider>);
    const DrumMachine = getByTestId('drumMachine');


    expect(DrumMachine.textContent).toBe('Drum Machine')

})