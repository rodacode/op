import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Nexus from "nexusui";
import { Sequencer } from 'react-nexusui';
import Tone from 'tone';

import './synth.scss';

const Synth = () => {
    const isPlaying = useSelector(state => state.settings.isPlaying)
    const bpm = useSelector(state => state.settings.bpm);
    const matrix = useSelector(state => state.drumMachine.matrix)
    const sequencerRef = useRef(Nexus.Sequencer);
    const osc = new Tone.Oscillator(440, 'sine').toMaster();

    const checkSound = (v) => {
        osc.start()
        console.log(v)
        osc.stop()

    }
    const savePattern = (e) => {
        e.preventDefault()
        // dispatch({ type: 'SET_DRUMMACHINE_MATRIX', payload: sequencerRef.current.matrix.pattern })
        // dispatch({ type: 'SET_DRUMMACHINE_CHANNELS_VOLUMEN', payload: [sound1.volume(), sound2.volume(), sound3.volume(), sound4.volume(), sound5.volume()] })
        console.log('PATTERN SAVED!')
    }

    //PLAYING
    useEffect(() => {
        if (isPlaying) {
            sequencerRef.current.start(bpm);
        }
        else {
            sequencerRef.current.on = false;
        }
    }, [isPlaying, bpm]);

    //POPULATE SEQUENCER MATRIX PATTERN
    useEffect(() => {
        sequencerRef.current.matrix.set.all(matrix);

        //COLORS
        sequencerRef.current.colorize("accent", "#ff0000");

    });
    return (
        <div className="bass__main__container">
            <div className="bass__header">
                <h1>Bass</h1>
                <button className="btn" onClick={savePattern}>Save Pattern</button>
            </div>
            <div className="bass__sequencer__container">
                <div id="sequencer">
                    <Sequencer
                        rows={5}
                        columns={16}
                        size={[500, 300]}
                        onStep={checkSound}
                        onReady={sequencer => (sequencerRef.current = sequencer)}
                    />
                </div>

            </div>
        </div>
    )
}

export default Synth;