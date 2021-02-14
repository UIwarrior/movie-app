import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});


const Home = ({classes}) => {
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
         <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                    <GridList className={classes.gridList} cols={2.5}>
        {moviesData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.poster_url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
          </div>
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

export default withStyles(styles)(Home);
