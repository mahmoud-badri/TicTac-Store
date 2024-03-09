import { combineReducers } from 'redux';
import searchReducer from './SearchReducer';
import ItemReducer from './ItemReducer';
import CartSlice from './Cart-Slice';

export default combineReducers({
    combinItems: ItemReducer,
    combinSearch: searchReducer,
    cart: CartSlice
});
