const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
}

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'BOOKS_REQUESTED':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'BOOKS_ERROR':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case 'BOOKS_ADDED':
            const {id, title, price} = action.payload;
            const found = state.cartItems.find(item => item.id === id);
            const newItems = [...state.cartItems].map(item => {
                return item.id === id? {...item, count: ++item.count, total: item.total + price}: item
            })
            if (found) return {
                ...state,
                cartItems: newItems,
                orderTotal: state.orderTotal + price
            }
            return {
                ...state,
                cartItems: [
                    ...state.cartItems, 
                    {id, name: title, count: 1, total: price}
                ],
                orderTotal: state.orderTotal + price
            }
        case 'BOOKS_DELETED':
            let itemTotal;
            const items = state.cartItems.filter(item => {
                if (action.payload === item.id) itemTotal = item.total
                return action.payload !== item.id})
            return {
                ...state,
                cartItems: items,
                orderTotal: state.orderTotal - itemTotal
            }
        default:
            return state;
    }
}

export default reducer;

