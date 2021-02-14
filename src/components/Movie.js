import React from 'react';
import {Row , Col, Card} from 'react-bootstrap';
import Button from './Button';
import { checkPropTypes } from 'prop-types';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/[email protected]@._V1_SX300.jpg";

  const Movie = (props) => {
     const {movie, movieDetail = {imdbRating: 0 , imdbID: 0} } = props;

     
     const getRating = (movie) => {
         alert('clicked');
         console.log(movie);
         props.getDetailsFromParent(movie);
     }


      const poster = movie.Poster === 'NA'  ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
      return (
          <Col sm ={4}>
                <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={poster} />
                <Card.Body>
                    <Card.Title>{movie.Year}</Card.Title>

                    <Card.Text>
                    <p>Title: {movie.Title}</p>
                    <p>Rating: {movie.imdbRating}</p>
                    <article>Plot: {movie.Plot}</article> 
                   {/*  <Button text="Get Rating" getRating = {() => getRating(movie)}/>
                    <p>Rating: {movie.imdbID === movieDetail.imdbID ? movieDetail.imdbRating : 'NA'}</p>
                    <article>Plot: {movieDetail.Plot}</article> */}
                    </Card.Text>
                </Card.Body>
                </Card>
          </Col>
      )

  }

  export default Movie;