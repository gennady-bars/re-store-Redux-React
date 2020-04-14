import React, {Component} from 'react';
import BookListItem from '../BookListItem/BookListItem';
import {connect} from 'react-redux';

import './BookList.css'

import withBookstoreService from '../hoc/withBookstoreService';
import {booksLoaded, booksRequested} from '../../actions';
import { bindActionCreators } from 'redux';
import compose from '../../utils/compose';
import Spinner from '../spinner/Spinner'

class BookList extends Component {

componentDidMount() {
    const {bookstoreService, booksLoaded, booksRequested} = this.props;
    booksRequested();
    bookstoreService.getBooks()
    .then((data) => booksLoaded(data));
}

    render() {
        const {books, loading} = this.props;

        if (loading) return <Spinner/> 
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
}

const mapStateToProps = ({books, loading}) => {
    return {books, loading}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({booksLoaded, booksRequested}, dispatch)
    // return {
    //     booksLoaded: (newBooks) => {
    //         dispatch(booksLoaded(newBooks))
    //     }
    // }
}

// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList));

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)