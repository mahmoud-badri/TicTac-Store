import axios from "axios";

export const getItems = () => (dispatch) => {
    return axios.get('https://dummyjson.com/products')
        .then((res) => dispatch({
            type: 'GET_ITEMS_LIST',
            payload: res.data.products
        }))
        .catch((err) => console.log(err))
};

export const getItemById = (id) => (dispatch) => {
    return axios.get(`https://dummyjson.com/products/${id}`)
        .then((res) => dispatch({
            type: 'GET_ITEM_BY_ID',
            payload: res.data
        }))
        .catch((err) => console.log(err))
};

//-----------------------------------------------------------------------------------------------

export const getCategory = (keyword) => (dispatch) => {

    return axios.get(`https://dummyjson.com/products/category/${keyword}`)
        .then((res) => dispatch({
            type: 'GET_CATEGORY',
            payload: res.data.products
        }))
        .catch((err) => console.log(err))
};
