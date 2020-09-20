import React from 'react';
import { Consumer } from '../../context.js';
import Spinner from '../layout/Spinner';
import Track from './Track'

const Tracks = () => {
    return (
        <Consumer>
            {value => {
                // console.log(value);
                const { track_list, heading } = value;
                if (track_list === undefined || track_list.length === 0) {
                    return <Spinner/>
                } else {
                    return (
                        <>
                            <h3 className="text-center mb-4">{heading}</h3>
                            <div className="row">
                                {track_list.map(item => (
                                    <Track key={item.track.track_id} track = {item.track}/>
                                ))}
                            </div>
                        </>
                    )

                }
            }}
        </Consumer>
    )
}

export default Tracks;