import React, { createContext, useReducer, useEffect } from 'react';
import { BookStackReducer } from '../reducers/BookStackReducer';


export const BookStackContext = createContext();


/**
 * BookStack Context Provider
 * 
 * @param {props} components that can access the context.
 * @returns {React.Context} Context Provider.
 */
const BookStackContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookStackReducer, {'stackList' : [], 'objStack': {}}, () => {
    const localData = localStorage.getItem('bookstack');
    return localData ? JSON.parse(localData) : {'stackList' : [], 'objStack': {}};
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