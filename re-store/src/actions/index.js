const booksLoaded = (newBooks) => {
  return {
    type: "BOOKS_LOADED",
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: "BOOKS_REQUESTED",
  };
};

const booksError = (error) => {
  return {
    type: "BOOKS_ERROR",
    error,
  };
};

const booksAdded = (book) => {
  return {
    type: "BOOKS_ADDED",
    payload: book,
  };
};

const booksDeleted = (id) => {
  return {
    type: "BOOKS_DELETED",
    payload: id,
  };
};

const booksIncreased = (id) => {
  return {
    type: "BOOKS_INCREASED",
    payload: id,
  };
};

const booksDecreased = (id) => {
  return {
    type: "BOOKS_DECREASED",
    payload: id,
  };
};
export {
  booksLoaded,
  booksRequested,
  booksError,
  booksAdded,
  booksDeleted,
  booksIncreased,
  booksDecreased,
};
