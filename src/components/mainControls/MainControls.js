import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './mainControls.scss';
import { Toggle } from 'react-nexusui';

const MainControls = () => {
    const isPlaying = useSelector(state => state.isPlaying);
    const bpm = useSelector(state => state.bpm);
    const dispatch = useDispatch();
    const setBpm = e => dispatch({ type: 'SET_BPM', payload: e.target.value })

    const play = () => {
        if (isPlaying) {
            dispatch({ type: 'PLAY' })
        }
        else {
            dispatch({ type: 'STOP' })
        }
    }

    return (
        <div className="mainControls__container">
            <div className="bpm__container">
                <span className="input__label">BPM: </span><input type={'text'} className="form-control" onChange={setBpm} value={bpm} />
            </div>
            <div className="play__container">
                <span className="input__label">Play:{isPlaying ? <span>ON</span> : <span>OFF</span>}</span>
                <Toggle
                    state={isPlaying}
                    onChange={() => play()}
                />
            </div>
        </div>
    )

}

export default MainControls;