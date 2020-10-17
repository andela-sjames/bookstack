import React, { createContext, useReducer, useEffect } from 'react';
import { BookStackReducer } from '../reducers/BookStackReducer';

export const BookStackContext = createContext();

const BookStackContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookStackReducer, [], () => {
    const localData = localStorage.getItem('bookstack');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('bookstack', JSON.stringify(books));
  }, [books]);
  return (
    <BookStackContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookStackContext.Provider>
  );
}
 
export default BookStackContextProvider;