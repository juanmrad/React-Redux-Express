const cart = (state = [], action) => {
  console.log('Item Added')
  switch(action.type) {

    case 'ADD_CART':
      console.log(state);
      return [
        ...state,
        action.item
      ]

    default:
      return state;
  }
}

export default cart;