import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delCart } from '../redux/actions/index';
import handleCart from '../redux/reducer/handleCart';
import { incrementCartItem, decrementCartItem } from '../redux/actions/index';



const Cart = () => {

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()



    // const delCart = (item) => {
    //     dispatch(delItem(cartitem))
    // }

    const cartItems = (cartItem) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className='container py-4'>
                    <button className='btn-close float-end' aria-label='Close' onClick={() => dispatch(delCart(cartItem))}></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.image} alt={cartItem.title} height="200px"
                                width="180px"
                            />

                        </div>
                        <div className='col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>
                                {cartItem.qty} X {cartItem.price}=
                                {cartItem.qty * cartItem.price} Naira
                            </p>
                            <button className="btn btn-outline-dark-me-4"
                                onClick={() => dispatch(decrementCartItem(cartItem))}>
                                <i className='fa fa-minus'></i>
                            </button>
                            <button className="btn btn-outline-dark-me-4"
                                onClick={() => dispatch(incrementCartItem(cartItem))}>
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <h3>Your cart is empty!</h3>
                    </div>

                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed to checkout</NavLink>
                </div>
            </div>
        );
    }


    return (
        <>
            {state?.length === 0 && emptyCart()}
            {state?.length > 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

//   return (
//       <>
//     <div className='row'>
//     <div className='col-md-4'>
//         <img src={product.image} alt = {product.title} height='200px'width ='180px'/>

//     </div>
//     <div className='col-md-4'>
//         <h3>{product.title}</h3>
//         <p className='lead fw-bold'>
//             {product.qty} X {product.price}= Naira
//             {product.qty * product.price}
//         </p>
//         <button className= "btn btn-outline-dark-me-4"
//             onClick={()=>handleButton(product)}>
//             <i className='fa fa-minus'></i>
//         </button>
//         <button className= "btn btn-outline-dark-me-4"
//             onClick={()=>handleButton(product)}>
//             <i className='fa fa-plus'></i>
//         </button>
//     </div>

//     </div>
//     </>
//   )



export default Cart;