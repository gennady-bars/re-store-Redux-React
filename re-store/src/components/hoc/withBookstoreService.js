import React from 'react';
import {BookstoreServiceConsumer} from '../bookstoreServiceContext/BookstoreServiceContext';
// import BookStoreService from '../../services/BookStoreService';

const withBookstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                       return <Wrapped {...props} bookStoreService={bookstoreService}/>
                    }
                }
            </BookstoreServiceConsumer>
        )

    }
}

export default withBookstoreService;