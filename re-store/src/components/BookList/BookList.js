import React, {Component} from 'react';
import BookListItem from '../BookListItem/BookListItem';
import {connect} from 'react-redux';

import './BookList.css'

import withBookstoreService from '../hoc/withBookstoreService';
import {booksLoaded, booksRequested, booksError} from '../../actions';
// import { bindActionCreators } from 'redux';
import compose from '../../utils/compose';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../errorIndicator/ErrorIndicator'

const BookList = ({books}) => {
    return (
        <ul className='book-list'>
            {
                books.map(book => {
                    return (
                        <li key={book.id}><BookListItem book={book}/></li>
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
        const {books, loading, error} = this.props;

        if (loading) return <Spinner/>;
        if (error) return <ErrorIndicator/>
        return <BookList books={books}/>
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
        }
    }

}

// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList));

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)