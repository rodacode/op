import React from 'react';
import { useSelector } from "react-redux";
import { Number } from 'react-nexusui';

import DrumMachine from '../../components/drumMachine/DrumMachine';
import Header from '../../components/header/Header';
import './audioRack.scss';

const AudioRack = () => {
    const bpm = useSelector(state => state.bpm)
    return (
        <div className="audioRack__container">
            <Header />
            <div className="bpm__container">
                <span>BPM</span><Number size={[60,30]} min={0} max={200} value={bpm} />
            </div>
            <DrumMachine />
        </div>

    )
}

export default AudioRack;