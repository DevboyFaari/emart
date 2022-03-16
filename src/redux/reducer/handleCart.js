const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //Check if Product Already Exist
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // increase the quantity 
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            }
            else {

                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }


        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }


        case "INCREMENTCARTITEM":
            {
                const newState = [...state]
                const exist1 = newState.find((x) => x.id === product.id);
                exist1.qty += 1
                return newState
            }

        case "DECREMENTCARTITEM":
            {
                const newState = [...state]
                const exist1 = newState.find((x) => x.id === product.id);
                if (exist1.qty === 1) {
                    return state
                }

                exist1.qty -= 1
                return newState
            }



        default:
            return state;

    }


}

export default handleCart;