import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
// cf1bbacc

const API_URL="http://www.omdbapi.com?apikey=cf1bbacc";

const movie1 = {
    "Title" : "Amzing Superman Syndrome",
    "Year":"2012",
    "imdbID": "tt2586634",
    "Type":"movie",
    "Poster": "N/A"
}

const App = () =>{
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSerchTerm] = useState("");

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data =  await response.json();

        setMovies(data.Search);

        
    }
    useEffect(() =>{
        searchMovies('Spiderman');
    },[]);

    return(
        <div className='app'>
            <h1>MovieLand</h1>

           <div className='search'>
            <input
              placeholder='Search for movies'
              value={searchTerm}
              onClick={(e) => setSerchTerm(e.target.value)
            }
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            />
           </div>
           {
            movies?.length > 0
              ? (
                <div className="container">
                {movies.map((movie) =>(
                    <MovieCard movie ={movie} />
                ))}
             </div>
              ) : (
                <div className='empty'>
                <h1>No Movies Found</h1> 
                </div>
              )
           }
           
        </div>

    );
}
export default App;