import React, {Component} from 'react';
import BookListItem from '../BookListItem/BookListItem';
import {connect} from 'react-redux';

import './BookList.css'

import withBookstoreService from '../hoc/withBookstoreService';
import {booksLoaded, booksRequested, booksError, booksAdded} from '../../actions';
// import { bindActionCreators } from 'redux';
import compose from '../../utils/compose';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../errorIndicator/ErrorIndicator'

const BookList = ({books, booksAdded}) => {
    return (
        <ul className='book-list'>
            {
                books.map(book => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                            booksAdded={() => booksAdded(book)}
                            book={book}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {

componentDidMount() {
    this.props.fetchBooks()
}

    render() {
        const {books, loading, error, booksAdded} = this.props;

        if (loading) return <Spinner/>;
        if (error) return <ErrorIndicator/>
        return <BookList 
        booksAdded={booksAdded}
        books={books}/>
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: () => {
            dispatch(booksRequested());
            ownProps.bookstoreService.getBooks()
            .then((data) => dispatch(booksLoaded(data)))
            .catch(err => dispatch(booksError(err)));
        },
        booksAdded: (book) => dispatch(booksAdded(book)),
    }

}

// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList));

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)