import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store/reducers/rootReducer';
import AudioRack from './containers/audioRack/AudioRack';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AudioRack />
      </div>
    </Provider>
  );
}

export default App;
