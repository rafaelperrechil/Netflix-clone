import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';

const App = () =>{

  const [movieList, setMivieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(true);
  
    useEffect(()=>{
        const loadAll = async () => {
          let list = await Tmdb.getHomeList();
          setMivieList(list);

          let originals = list.filter(i=>i.slug === 'originals');
          let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1) );
          let chosen = originals[0].items.results[randomChosen];
          let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
          setFeatureData(chosenInfo);
        }
        loadAll();
      }, []);

      useEffect(()=>{
        const scrollListener = () => {
          if(window.scrollY > 10){
            setBlackHeader(true);
          }else{
            setBlackHeader(false);
          }
          console.log(blackHeader);
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
          window.removeEventListener('scroll', scrollListener);
        }

      }, []);

    return(
        <div className="home">
        
        <Header black={blackHeader}/>

        {featureData &&
          <FeatureMovie item={featureData}/>
        }

          <section className="lists">
            {movieList.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items}/>
            ))}
          </section>

          {movieList.length <= 0 &&
          <div className="loading">
            <img src={process.env.PUBLIC_URL + '/loading.gif'} />
          </div>
          } 
          
        </div>
    );
}

export default App;