const INITIAL_STATE = {
    search_item: [],
};

export default function searchReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_SEARCH':
            return {
                ...state,
                search_item: action.payload.map((item) => ({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    images: item.images,
                })),
            };
        default:
            return state;
    }
}