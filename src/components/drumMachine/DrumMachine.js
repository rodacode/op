import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Howl } from 'howler';

import Nexus from "nexusui";
import { Sequencer } from 'react-nexusui';
import { Dial } from 'react-nexusui';

import './drumMachine.scss';

const DrumMachine = () => {
    const isPlaying = useSelector(state => state.settings.isPlaying)
    const bpm = useSelector(state => state.settings.bpm);
    const matrix = useSelector(state => state.drumMachine.matrix)
    const ch1Volumen = useSelector(state => state.drumMachine.ch1Volumen)
    const ch2Volumen = useSelector(state => state.drumMachine.ch2Volumen)
    const ch3Volumen = useSelector(state => state.drumMachine.ch3Volumen)
    const ch4Volumen = useSelector(state => state.drumMachine.ch4Volumen)
    const ch5Volumen = useSelector(state => state.drumMachine.ch5Volumen)
    const sequencerRef = useRef(Nexus.Sequencer);
    const dispatch = useDispatch();
    const checkSound = (v) => {
        if (v[0] === 1) {
            sound1.play()
        }
        if (v[1] === 1) {
            sound2.play()
        }
        if (v[2] === 1) {
            sound3.play()
        }
        if (v[3] === 1) {
            sound4.play()
        }
        if (v[4] === 1) {
            sound5.play()
        }
    }
    const savePattern = (e) => {
        e.preventDefault()
        dispatch({ type: 'SET_DRUMMACHINE_MATRIX', payload: sequencerRef.current.matrix.pattern })
        dispatch({ type: 'SET_DRUMMACHINE_CHANNELS_VOLUMEN', payload: [sound1.volume(), sound2.volume(), sound3.volume(), sound4.volume(), sound5.volume()] })
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

    // SET TRACKS VOLUMEN
    const setVolumen = (event, selector) => {
        console.log('VOLUMEN: ' + event)
        switch (selector) {
            case 'ch1Volumen':
                return sound1.volume(event)
            case 'ch2Volumen':
                return sound2.volume(event)
            case 'ch3Volumen':
                return sound3.volume(event)
            case 'ch4Volumen':
                return sound4.volume(event)
            case 'ch5Volumen':
                return sound5.volume(event)
            default:
                return null;
        }
    };

    // SOUNDS
    const sound1 = new Howl({
        src: require('../../assets/samples/kick.wav'),
        autoplay: false,
        loop: false,
        buffer: true,
        onend: function () {
            console.log('Finished!');
        }
    });
    const sound2 = new Howl({
        src: require('../../assets/samples/perc.wav'),
        autoplay: false,
        loop: false,
        buffer: true,
        onend: function () {
        }
    });
    let sound3 = new Howl({
        src: require('../../assets/samples/clack.wav'),
        autoplay: false,
        loop: false,
        buffer: true,
        onend: function () {
        }
    });
    const sound4 = new Howl({
        src: require('../../assets/samples/hh.wav'),
        autoplay: false,
        loop: false,
        buffer: true,
        onend: function () {
        }
    });
    const sound5 = new Howl({
        src: require('../../assets/samples/hh2.wav'),
        autoplay: false,
        loop: false,
        buffer: true,
        onend: function () {
        }
    });

    return (
        <div className="drumMachine__main__container">
            <div className="drumMachine__header">
                <h1>Drum Machine</h1>
                <button className="btn" onClick={savePattern}>Save Pattern</button>
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
                    <p>VOL</p>
                    <div className="vol__control">
                        <p>OH</p>
                        <Dial
                            size={[60, 30]}
                            interaction={"radial"}
                            onChange={(v) => setVolumen(Nexus.scale(v, 0, 127, 0, 1), 'ch5Volumen')}
                            value={Nexus.scale(ch5Volumen, 0, 1, 0, 127)}
                            min={0}
                            max={127}
                        />
                    </div>
                    <div className="vol__control">
                        <p>HH</p>
                        <Dial
                            size={[60, 30]}
                            interaction={"radial"}
                            onChange={(v) => setVolumen(Nexus.scale(v, 0, 127, 0, 1), 'ch4Volumen')}
                            value={Nexus.scale(ch4Volumen, 0, 1, 0, 127)}
                            min={0}
                            max={127}
                        />
                    </div>
                    <div className="vol__control">
                        <p>CLAP</p>
                        <Dial
                            size={[60, 30]}
                            interaction={"radial"}
                            onChange={(v) => setVolumen(Nexus.scale(v, 0, 127, 0, 1), 'ch3Volumen')}
                            value={Nexus.scale(ch3Volumen, 0, 1, 0, 127)}
                            min={0}
                            max={127}
                        />
                    </div>
                    <div className="vol__control">
                        <p>SD</p>
                        <Dial
                            size={[60, 30]}
                            interaction={"radial"}
                            onChange={(v) => setVolumen(Nexus.scale(v, 0, 127, 0, 1), 'ch2Volumen')}
                            value={Nexus.scale(ch2Volumen, 0, 1, 0, 127)}
                            min={0}
                            max={127}
                        />
                    </div>
                    <div className="vol__control">
                        <p>BD</p>
                        <Dial
                            size={[60, 30]}
                            interaction={"radial"}
                            onChange={(v) => setVolumen(Nexus.scale(v, 0, 127, 0, 1), 'ch1Volumen')}
                            value={Nexus.scale(ch1Volumen, 0, 1, 0, 127)}
                            min={0}
                            max={127}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DrumMachine;