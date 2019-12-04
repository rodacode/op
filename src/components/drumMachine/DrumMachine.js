import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Nexus from "nexusui";
import { Sequencer } from 'react-nexusui';
import { Dial } from 'react-nexusui';

import './drumMachine.scss';

const DrumMachine = () => {
    const isPlaying = useSelector(state => state.isPlaying)
    const matrix = useSelector(state => state.drumMachineMatrix)
    const sequencerRef = useRef(Nexus.Sequencer);
    const dispatch = useDispatch();
    const checkSound = (v) => {
        dispatch({ type: 'SET_MATRIX', payload: sequencerRef.current.matrix.pattern})
        for (let i = 0; i < 5; i++) {
            if (v[i] === 1) {
                console.log('hit number' + i)
                console.log('FUCKK    ' +sequencerRef.current.matrix.pattern);
            }
        }
    }
    const savePattern = (e) => {
        e.preventDefault()
        dispatch({ type: 'SET_MATRIX', payload: sequencerRef.current.matrix.pattern})
    }


    //PLAYING
    useEffect(() => {
        if (isPlaying) {
            sequencerRef.current.matrix.set.all(matrix);
            sequencerRef.current.start();
        }
        else {
            sequencerRef.current.on = false;
        }
    }, [isPlaying]);

    //POPULATE SEQUENCER MATRIX PATTERN
    useEffect(() => {
        sequencerRef.current.matrix.set.all(matrix);
    });

    //COLORS
    useEffect(() => {
        sequencerRef.current.colorize("accent", "#ff0000");
    });


    // SET TRACKS VOLUMEN
    const setVolumen = e => e.target.value;


    return (
        <div className="drumMachine__main__container">
            <div className="drumMachine__header">
                <h1>Drum Machine</h1>
            </div>
            <div className="drumMachine__container">
                <div id="sequencer">
                    <Sequencer
                        rows={5}
                        columns={16}
                        size={[500, 300]}
                        onStep={checkSound}
                        onReady={sequencer => (sequencerRef.current = sequencer)}
                    />
                </div>
                <div className="volume_controls__container">
                    <button className="btn" onClick={savePattern}>Save Pattern</button>
                    <p>VOL</p>
                    <div className="vol__control">
                        <p>OH</p>
                        <Dial
                            size={[60, 30]}
                            interaction={"radial"}
                            onChange={() => setVolumen}
                            value={0}
                            min={0}
                            max={10}
                        />
                    </div>
                    <div className="vol__control">
                        <p>HH</p>
                        <Dial
                            size={[60, 30]}
                            interaction={"radial"}
                            onChange={() => setVolumen}
                            value={0}
                            min={0}
                            max={10}
                        />
                    </div>
                    <div className="vol__control">
                        <p>CLAP</p>
                        <Dial
                            size={[60, 30]}
                            interaction={"radial"}
                            onChange={() => setVolumen}
                            value={0}
                            min={0}
                            max={10}
                        />
                    </div>
                    <div className="vol__control">
                        <p>SD</p>
                        <Dial
                            size={[60, 30]}
                            interaction={"radial"}
                            onChange={() => setVolumen}
                            value={0}
                            min={0}
                            max={10}
                        />
                    </div>
                    <div className="vol__control">
                        <p>BD</p>
                        <Dial
                            size={[60, 30]}
                            interaction={"radial"}
                            onChange={() => setVolumen}
                            value={0}
                            min={0}
                            max={10}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DrumMachine;