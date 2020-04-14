const initialState = {
    books: [
        {id: 1, title: 'Production', author: 'Susan'},
        {id: 2, title: 'Release it', author: 'Michael'}
    ]
}

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
        default:
            return state;
    }
}

export default reducer;

