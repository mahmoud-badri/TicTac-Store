const INOTOAL_VALUES = {
    items: [],
    selectedItem: {},
    category: []
}

export default function ItemReducer(state = INOTOAL_VALUES, action) {
    switch (action.type) {
        case 'GET_ITEMS_LIST':
            return {
                ...state,
                items: action.payload
            }

        case 'GET_ITEM_BY_ID':
            console.log('GET_ITEM_BY_ID Action:', action);
            return {
                ...state,
                selectedItem: action.payload
            };

        case 'GET_CATEGORY':
            return {
                ...state,
                category: action.payload
            };

        default:
            return state;
    }
}