import React from 'react';

import MainControls from '../../components/mainControls/MainControls';
import DrumMachine from '../../components/drumMachine/DrumMachine';
import Header from '../../components/header/Header';
import './audioRack.scss';

const AudioRack = () => {
    return (
        <div className="audioRack__container">
            <Header />
            <MainControls />
            <DrumMachine />
        </div>

    )
}

export default AudioRack;