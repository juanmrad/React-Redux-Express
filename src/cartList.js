import React from 'react';
import Grid from '@material-ui/core/Grid';

function CartList({items}) {

  return (
    <div>
      {items.map(item => 
      <Grid item xs={12}>
        {item}
      </Grid>
        )}
    </div>
  )
}

export default CartList;