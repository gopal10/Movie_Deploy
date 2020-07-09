import React, {useState} from "react"
import Moviecard from  "./movieCard";

export default function SearchMovie (){
   
    const [query, setQuery]=useState('');

    const [movies, setMovie]=useState([]);

    const searchmovie = async (e) => {
        e.preventDefault();
        const url= `https://api.themoviedb.org/3/search/movie?api_key=14202c1bfdc2e4b00798b1890506898d&language=en-US&query=${query}&page=1&include_adult=false`;
      
        try{
        const result = await fetch(url);
        const data = await result.json();
        console.log(data.results);
        setMovie(data.results)
        
        }
        catch(err){
            console.log("Error in loading api");
        }


    }

        return (

            <div>
            <form className="form"  onSubmit= {searchmovie}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
             placeholder="i.e. The Shawshank" onChange={(e) => setQuery(e.target.value) } required ></input>
            <button className="button" type="submit">Search</button>
            </form>

             <div className="card-list">
             {movies.filter(movie => movie.poster_path).map(movie => ( 
               <Moviecard movie={movie} key={movie.id} />
              ))}

             </div>

            </div>
        )
    
}