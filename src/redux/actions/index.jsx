//add item to cart


export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product
  }
}

//For delete item from cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product
  }
}

export const incrementCartItem = (cartItem) => {
  return {
    type: "INCREMENTCARTITEM",
    payload: cartItem
  }
}

export const decrementCartItem = (cartItem) => {
  return {
    type: "DECREMENTCARTITEM",
    payload: cartItem
  }
}
