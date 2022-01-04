import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import {AuthContext} from '../context/AuthContext'


const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f&query='

const Home = () => {
    const [movies, setmovies] = useState([])
    const [searchMovie, setsearchMovie] = useState('')
    const {currentUser} = useContext(AuthContext)


    useEffect(() => {
        getMovie(FEATURED_API)
    }, [])

    const getMovie = (API) => {
        fetch(API)
        .then((res) => res.json())
        .then(res => setmovies(res.results))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchMovie && currentUser){
            getMovie(SEARCH_API + searchMovie)
        }else{
            alert('Please log in to search a movie')
        }setsearchMovie('')
    }

    return (
        <>
        <form className='search' onSubmit={handleSubmit}>
            <input 
            type='search'
            className='search-input'
            placeholder='Search a movie...'
            value={searchMovie}
            onChange={(e) => setsearchMovie(e.target.value)}
            />
            <button type='submit' >Search</button>
        </form>
        <div className='movie-container'>
            {movies.map((movie) => (
                <MovieCard key={movie.id} {...movie}/>
            ))}
        </div>
        </>
    )
}

export default Home
