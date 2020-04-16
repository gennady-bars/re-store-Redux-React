
const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
}

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    }
}

const booksAdded = (book) => {
    return {
        type: 'BOOKS_ADDED',
        payload: book
    }
}

const booksDeleted = (id) => {
    return {
        type: 'BOOKS_DELETED',
        payload: id
    }
}
export {booksLoaded, booksRequested, booksError, booksAdded, booksDeleted}