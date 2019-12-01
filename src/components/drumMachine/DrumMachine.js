import React, { useState, useRef } from 'react';
import Nexus from "nexusui";
import { Sequencer } from 'react-nexusui';
import { Toggle } from 'react-nexusui';
import { Dial } from 'react-nexusui';

import './drumMachine.scss';

const DrumMachine = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const sequencerRef = useRef(Nexus.Sequencer);
    const play = () => {
        sequencerRef.current.start(50)
        setIsPlaying(true)
    }
    const stop = () => {
        sequencerRef.current.matrix.populate.all(sequencerRef.current.matrix)
        sequencerRef.current.stop();
        setIsPlaying(false)
    }
    const checkSound = (v) => {
        for (let i = 0; i < 5; i++) {
            if (v[i] === 1) {
                console.log('hit number' + i)
                console.log(sequencerRef.current.matrix)

            }
        }
    }
    return (
        <div className="drumMachine__main__container">
            <div className="drumMachine__header">
                <h1>Drum Machine</h1>
                <div>
                    <span>Play</span>
                    <Toggle
                        state={isPlaying}
                        onChange={() => play()}
                    />
                </div>
                <button onClick={() => stop()}>Stop</button>
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
                    <p>BD</p>
                    <Dial
                        size={[60, 30]}
                        interaction={"radial"}
                        onChange={console.log}
                        value={Math.random()}
                        min={0}
                        max={10}
                    />
                </div>
                <div className="vol__control">
                    <p>SD</p>
                    <Dial
                        size={[60, 30]}
                        interaction={"radial"}
                        onChange={console.log}
                        value={Math.random()}
                        min={0}
                        max={10}
                    />
                </div>
                <div className="vol__control">
                    <p>CLAP</p>
                    <Dial
                        size={[60, 30]}
                        interaction={"radial"}
                        onChange={console.log}
                        value={Math.random()}
                        min={0}
                        max={10}
                    />
                </div>
                <div className="vol__control">
                    <p>HH</p>
                    <Dial
                        size={[60, 30]}
                        interaction={"radial"}
                        onChange={console.log}
                        value={Math.random()}
                        min={0}
                        max={10}
                    />
                </div>
                <div className="vol__control">
                    <p>OH</p>
                    <Dial
                        size={[60, 30]}
                        interaction={"radial"}
                        onChange={console.log}
                        value={Math.random()}
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