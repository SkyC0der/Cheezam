import React from 'react'
import {Link } from 'react-router-dom'
import '../../App.css'

const Track = (props) => {
    const {track} = props;
    return (
        <div className = "col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-play mr-2"></i>Track</strong>: {track.track_name} <br></br>
                        <strong><i className="fas fa-compact-disc my-2 mr-2"></i>Album</strong>: {track.album_name}
                        <Link to={`lyrics/track/${track.track_id}`} className="btn mt-2 btn-dark btn-block">
                            <i className="fas fa-chvron-right"></i> View Lyrics
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Track;