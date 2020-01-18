import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import DrumMachine from '../components/drumMachine/DrumMachine';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { initialDrumMachineState, drumMachineReducer } from './store/reducers/rootReducer'
import Nexus from "nexusui";


afterEach(cleanup);

function renderWithRedux(
    ui,
    { initialState, store = createStore(drumMachineReducer, initialDrumMachineState) } = {}
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      // adding `store` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      store,
    }
  }
test('DrumMachine to be mounted', () => {
    const { getByTestId } = renderWithRedux(<DrumMachine />);
    // const DrumMachine = getByTestId('drumMachine');


    expect(DrumMachine.textContent).toBe('Drum Machine')

})