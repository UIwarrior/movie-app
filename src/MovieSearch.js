import React, { useState, useEffect } from 'react';
import "../App.css";
import Header from './Header';
import Search from './search';
import Movie from './Movie';
import API from '../api';
import Axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';

const MovieSearch = () => {
 const [movies, setMovies] = useState({});
 const [movieDetailObj , setMovieDetail] = useState({}); 
    const [loading, setLoading] = useState(true);

     useEffect(() => {
            Axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=509a269d').then(response => {
                //console.log(response);
                //setMovies(response.data);
                setLoading(false);
            })
     }, []);


    const search = searchTerm => {
        setLoading(true);
        Axios.get('http://www.omdbapi.com/?apikey=509a269d&plot=full',{
           params:{
            t: searchTerm
           } 
        }).then(response => {
            console.log(response.data);
            if(response.data !== undefined){
                setMovies(response.data);
            }
            else{
                setMovies({});
            }
            
            setLoading(false);
        })
    }

    const getMovieDetails = ({imdbID}) => {
        Axios.get('http://www.omdbapi.com/?apikey=509a269d&plot=full',{
           params:{
            i: imdbID
           } 
        }).then(response => {
            console.warn('full details of the movie', response.data);
            setMovieDetail(response.data);
        })
    }

/*     const getDetailsFromParent = (movieObj) => {
        console.info('movie object coming from child', movieObj);
    } */


      return (
           <Container>
            <Search search ={search} />
            <Row>
            <Col sm = {12}>   
            {loading && <span>....loading</span> }
               {!loading && 
               (<Row>
              {/*  {movies.map( movie=> (
               )) 
               }
                       */}            
                       <Movie movie={movies} getDetailsFromParent = {getMovieDetails} movieDetail = {movieDetailObj}/>

               </Row> 
               )}  
             </Col>  
            </Row> 
            </Container>
        )
}

export default MovieSearch;