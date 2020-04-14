import React from 'react';
import BookList from '../BookList/BookList'

import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable';

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};
export default HomePage;