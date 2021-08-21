import React , { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({title, items}) =>{
   
    const [scrollX, setScrollX ] = useState(-400);

    const leftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const rightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 200;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="left" onClick={leftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 60}} />
                {/* <NavigateBeforeIcon ></NavigateBeforeIcon> */}
            </div>
            <div className="right" onClick={rightArrow}>
                <NavigateNextIcon style={{ fontSize: 60 }}/>
            </div>

            <div className="listarea">
                <div className="list" style={{
                        marginLeft: scrollX,
                        width: items.results.length * 200
                    }}>
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