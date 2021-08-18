import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

export default () =>{

    useEffect(()=>{ 
      const teste = 'rafael2'
      const teste2 = 'rafael2'
        const loadAll = async () => {
          let list = await Tmdb.getHomeList();
          console.log(list);

        }
    
        loadAll();
      }, []);

    return(
        <div>Opaaa</div>
    );
}