export default (state, actoin) => {
    switch (actoin.type){
        case 'ADD_MOVIE_TO_MOVIELIST':
            return {
                ...state,
                movieList: [actoin.payload, ...state.movieList],
            };

        case 'MOVIE-REMOVE':
            return {
                ...state,
                movieList: state.movieList.filter((rem)=>{
                    return rem.imdbID !== actoin.payload;
                })
            };
        default:
            return state;
    }
}