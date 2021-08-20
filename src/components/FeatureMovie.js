import React from 'react';
import './FeatureMovie.css';

const FeatureMovie = ({item}) => {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return (
        <section className="featured" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <div className="vertical">
                <div className="horizontal">
                    <h2 className="name">{item.original_name}</h2>
                    <ul>
                        <li className="points">{item.vote_average} pontos</li>
                        <li className="year">{firstDate.getFullYear()}</li>
                        <li className="year">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</li>
                    </ul>
                    <div className="description">{item.overview}</div>
                    <div className="buttons">
                        <a href="#" className="see">Assistir</a>
                        <a href="#" className="mylist">+ Minha Lista</a>
                    </div>
                    <div className="genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );

};

export default FeatureMovie;