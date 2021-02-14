import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import Alert from '@material-ui/lab/Alert';

const Home = () => {
    const [movieDirArr , setMovieDirArr ] = useState([])


    useEffect(() => {
        Axios.get('http://localhost:8000/movie').then(response => {
            //console.log(response);
            //setMovies(response.data);
            console.warn('my movie folders',response.data.movies);
            setMovieDirArr(response.data.movies);
        })
 }, []);

    return (
        <div>
         <Alert severity="error">Upcoming movies</Alert>
          <Row> 
          {movieDirArr.map(movie => (
              <Col sm = {3}>
                <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{movie}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
              </Col>
              
          ))}
          </Row>
        </div>
    )
}

export default Home;