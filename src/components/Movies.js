import "../App.css";

import { Component } from 'react'

class Movies extends Component {
    constructor(){
        super()
        this.state={
            moviesData:[],
            currentSelectedMovie: null
        }

    }

    fetchMovies=()=>{
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res=> res.json())
        .then((data)=>{
            this.setState({
                moviesData: data
            })
        })
    }

    componentDidMount(){
        this.fetchMovies()
    }

    handleDropdownChange=(event)=>{
        this.setState({
            currentSelectedMovie: event.target.value
        })
    }


    render() {
            let movieDropdown = this.state.moviesData.map((movie)=>{
                return <option>{movie.title}</option>
            })

            let selectedMovieObj = this.state.moviesData.find((movie)=>{
                return movie.title === this.state.currentSelectedMovie
            }) 


        return (
            <div className="movies">
               <h1>Select a Movie</h1>
                <select onChange={this.handleDropdownChange}>
                    <option></option>
                    {movieDropdown}
                </select>
                <div className="movie-info-container">
                <h1>
                 {selectedMovieObj?.title}
                </h1>
                <div>{selectedMovieObj?.release_date}</div>
                <div>{selectedMovieObj?.description}</div>

                </div>
                
            </div>
        )
    }
}

export default Movies
