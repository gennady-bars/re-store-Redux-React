import React from 'react';
import {BookstoreServiceConsumer} from '../bookstoreServiceContext/BookstoreServiceContext';
// import BookStoreService from '../../services/BookStoreService';

const withBookstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                       return <Wrapped {...props} bookstoreService={bookstoreService}/>
                    }
                }
            </BookstoreServiceConsumer>
        )

    }
}

export default withBookstoreService;