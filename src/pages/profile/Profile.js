import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Movie from "../../components/movies/Movie";
import './profile.css';
import {GlobalContext} from "../../context/GlobalState";

function Profile() {
    const [film, setFlim] = useState('');
    const [year, setYear] = useState('');
    const [choose, setChoose] = useState('movie');
    const [showMovie, serShowMovie] = useState([]);
    const { addMovies, movieList } = useContext(GlobalContext);

    async function mySelect(e) {
            e.preventDefault()
        const token = localStorage.getItem('token');

        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${film} wars&apikey=8f507077&y=${year}&type=${choose}`);
            serShowMovie(response.data.Search);
        } catch (e) {
            console.error(e);
        }
    }



    let storedMovie = movieList.find((e)=>{
        return e.imdbID === showMovie.imdbID;
    })

    const movieListDisabled = storedMovie ? true : false;

    return (
        <div className='profile-body'>
            <form onSubmit={mySelect} id='zoek-form'>
                <label className='label-of-zoek'>Name of film
                    <input
                        type='text'
                        id='film'
                        onChange={(e) => setFlim(e.target.value)}
                        value={film}
                    />
                </label>
                <label className='label-of-zoek'>Year
                    <input
                        type='number'
                        id='year'
                        onChange={(e) => setYear(e.target.value)}
                        value={year}
                    />
                </label>
                <label className='label-of-zoek'>Type
                    <select
                        onChange={(value) => {
                            setChoose(value.target.value)
                        }}
                    >
                        <option value={`movie`}>movie</option>
                        <option value={`series`}>series</option>
                        <option value={`game`}>game</option>
                    </select>
                </label>
                <button type='submit'>choose</button>
            </form>
            {showMovie ? showMovie.map((value, index) => {
                return <> {Object.keys(showMovie).length > 0  && <Movie

                    key={index}
                    image={value.Poster}
                    name={value.Title}
                    year={value.Year}
                    type={value.Type}
                    movie={value}
                />}<button
                    type='button'
                    disabled={movieListDisabled}
                    onClick={()=> addMovies(value)}
                >
                    add to addList
                </button></>
            }) : <h1>er is geen information van u gekozen</h1>
            }

        </div>
    );
}

export default Profile;