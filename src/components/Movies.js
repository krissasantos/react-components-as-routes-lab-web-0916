import React from 'react'
import { movies } from '../data'

const Movies = () => {
    return (
        <div>
            <h1>Movies Page</h1>

             {movies.map(m =>{
          return <div>

          <ul> 
          {m.title}
          {m.time}
          {m.genres}
         { m.metascore}
          </ul>
          </div>
        })}
         
        </div>
    )
}

module.exports = Movies
