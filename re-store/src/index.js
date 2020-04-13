import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app/App';
import ErrorBoundry from './components/errorboundry/ErrorBoundry'
import BookstoreService from './services/BookStoreService';
import {BookstoreServiceProvider} from './components/bookstoreServiceContext/BookstoreServiceContext'

import store from './store'

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App/>
          </Router>        
        </BookstoreServiceProvider>
      </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)

