import React from 'react'


function ListItem(props) {
    const {movie} = props
    return(
        <div className='List-Item'>
            <img alt={props.movie.title} className='movie-poster' src={props.movie.posterImg} />
            <div className='movie-info'>
    <p>{props.movie.title}</p>
    <p>{props.movie.year}</p>
            </div>
            <p className='delete-button' onClick={() => props.deleteMovie(movie.id)}>X</p>
        </div>
    )
}

export default ListItem;
