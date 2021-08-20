import React from 'react';
import './MovieRow.css';

const MovieRow = ({title, items}) =>{

    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="listarea">
                <div className="list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieRow;