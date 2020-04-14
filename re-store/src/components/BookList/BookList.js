import React, {Component} from 'react';
import BookListItem from '../BookListItem/BookListItem';
import {connect} from 'react-redux';

import withBookstoreService from '../hoc/withBookstoreService';
import {booksLoaded} from '../../actions';
import { bindActionCreators } from 'redux';
import compose from '../../utils/compose';

class BookList extends Component {

componentDidMount() {
    const {bookstoreService} = this.props;
    const data = bookstoreService.getBooks();
    this.props.booksLoaded(data)

}

    render() {
        const {books} = this.props;
        return (
            <ul>
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

const mapStateToProps = ({books}) => {
    return {books}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({booksLoaded}, dispatch)
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