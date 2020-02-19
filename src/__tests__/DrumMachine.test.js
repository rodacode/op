import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import DrumMachine from '../components/drumMachine/DrumMachine';
import { createStore } from 'redux';
import { Provider } from 'react-redux'



const store = createStore(() => ({ count: 1000 }))

test('DrumMachine to be mounted', () => {
    const { getByTestId } = render(<Provider store={store}><DrumMachine /></Provider>);


    expect(getByTestId('drumMachine')).toBe('Drum Machine')

})