import './App.css';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App({ dispatch, cart }) {
  const classes = useStyles();

  function addToCart() {
    console.log('add item');
    dispatch({type: 'ADD_CART', item: 'test'})
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          Company Name
        </Grid>
        <Grid item xs={2}>
          <ShoppingCartIcon></ShoppingCartIcon>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper>Products</Paper>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              Item 1
            </Grid>
            <Grid item xs={12}>
              Item 2
            </Grid>
            <Grid item xs={12}>
              Item 3 <Button onClick={addToCart}> Add To Cart</Button>
            </Grid>
            <Grid item xs={12}>
              Item 3
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Paper>Cart</Paper>
          <Grid container spacing={3}>
            {cart}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state
  }
}

export default connect(mapStateToProps)(App);
