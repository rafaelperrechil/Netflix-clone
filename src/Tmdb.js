const API_KEY = '91937e5fff1ce57112476186262258d3';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    return (await fetch(`${API_BASE}${endpoint}`)).json();
}

export default{
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}&language=pt-BR`)
            },
        ];
    },

    getMovieInfo: async (movieId, type) => {

        let info = {}

        if(movieId){
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`)
                break;
            }
        }
        
        return info;

    }
}