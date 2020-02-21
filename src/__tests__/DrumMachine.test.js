import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import DrumMachine from '../components/drumMachine/DrumMachine';
import { Provider } from 'react-redux'



const store = () => null;

test('DrumMachine to be mounted', () => {
    const { getByTestId } = render(<Provider store={store}><DrumMachine /></Provider>);
    const DrumMachine = getByTestId('drumMachine');


    expect(getByTestId('drumMachine')).toBe('Drum Machine')

})