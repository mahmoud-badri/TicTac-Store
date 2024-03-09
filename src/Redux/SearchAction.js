import axios from "axios";

export const searchAction = (term) => (dispatch) => {
    axios
        .get(`https://dummyjson.com/products/search?q=${term}`)
        .then((res) => {
            dispatch({
                type: 'GET_SEARCH',
                payload: res.data.products,
            });
        })
        .catch((err) => console.log(err));
};