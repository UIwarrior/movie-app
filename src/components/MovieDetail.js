import React from 'react';

const MovieDetail = (props) => {
    return (
    <div>
      <p>{props.title}</p>
      <strong>IMDB: {props.imbdRating}</strong>   
    </div>
    )
}