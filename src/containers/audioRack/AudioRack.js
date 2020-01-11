import React from 'react';

import MainControls from '../../components/mainControls/MainControls';
import DrumMachine from '../../components/drumMachine/DrumMachine';
import Header from '../../components/header/Header';
import './audioRack.scss';

const AudioRack = () => {
    let audioContext;
    try {
        audioContext =
            new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
        window.alert(
            `Sorry, but your browser doesn't support the Web Audio API!`
        );
    }
    return (
        <div className="audioRack__container">
            {audioContext && <div>
                <Header />
                <MainControls />
                <DrumMachine />
            </div>}
        </div>

    )
}

export default AudioRack;