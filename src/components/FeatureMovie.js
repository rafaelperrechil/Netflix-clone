import React from 'react';
import './FeatureMovie.css';

const FeatureMovie = ({item}) => {
    return (
        <div className="featured" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <h2>{item.original_name}</h2>
        </div>
    );

};

export default FeatureMovie;