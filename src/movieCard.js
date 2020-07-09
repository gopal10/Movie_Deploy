import React from "react";

export default function movieList({movie}) {
    const addToLike =(e)=>{
        e.preventDefault();
        console.log("adding to like page");
        let likeMovie = movie;
        console.log(likeMovie);

    }

    return (
           
        <div className="card">
         <h3 className="card--title">{movie.title}</h3>      
        <img className="card--image"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + ' poster'}
                  />
              <div className="card--content">
             
              <p><small>RELEASE DATE: {movie.release_date}</small></p>
              <p><small>RATING: {movie.vote_average}</small></p>
              <p className="card--desc">{movie.overview}</p>

              <button className="add" onClick={addToLike} > Like </button>
        </div>
        </div>
    )
}