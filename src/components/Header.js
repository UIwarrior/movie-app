import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import SimpleTabs from './Tab';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));



const Header = () => {

    const openLoginModal = () => {
        console.log("login modal opening");
    }
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      function rand() {
        return Math.round(Math.random() * 20) - 10;
      }

      const classes = useStyles();
      // getModalStyle is not a pure function, we roll the style only on the first render
      const [modalStyle] = React.useState(getModalStyle);

      function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      };

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <p id="simple-modal-description">
           <SimpleTabs/>
          </p>
        </div>
      );


    return (
        <div className={classes.root}>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
       {body}
      </Modal>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Movie Details
          </Typography>
          <Button color="inherit" onClick= {handleOpen} >Login</Button>
        </Toolbar>
      </AppBar>
      </div>
    )
};

export default Header;
