import React, { createContext, useReducer, useEffect} from 'react';
import AddReducer from './Reducer'

const addedData={
    movieList: localStorage.getItem('movieList') ? JSON.parse(localStorage.getItem('movieList')) : [],
};

export const GlobalContext = createContext(addedData);

function GlobalStateProvider({ children }) {
    const [state, setState] = useReducer(AddReducer, addedData);

    useEffect(()=>{
        localStorage.setItem("movieList", JSON.stringify(state.movieList));
    },[state])

    function addMovies(movie){
        setState({type: 'ADD_MOVIE_TO_MOVIELIST', payload: movie});
    }

    function movieRemove(value){
        setState({ type: 'MOVIE-REMOVE', payload: value});
    }

    return (
        <GlobalContext.Provider value={{movieList: state.movieList, addMovies: addMovies, movieRemove: movieRemove}}>
            { children }
        </GlobalContext.Provider>
    );
}

export default GlobalStateProvider;