import axios from 'axios';

const initialState = {
    user: {},
    cart: []
}

const GET_USER = 'GET_USER';

export function getUser() {
    const user = axios.get('/auth/me').then(res => {
        return res.data;
    })
    return {
        type: GET_USER,
        payload: user
    }
}

const ADD_CART = 'ADD_CART';

export function addCart(itemToAdd, amount) {
    console.log(itemToAdd,amount);
    const cart = axios.post('/api/cart', {donut_id:itemToAdd.donut_id, donut_amount: amount}).then(res => {

    return res.data;
    })
    return {
        type: ADD_CART,
        payload: cart
    }
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        case ADD_CART + '_FULFILLED':
            console.log(action.payload);
            return Object.assign({}, state, { cart: [...state.cart, action.payload] });
        default:
            return state;
    }
}