import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookStackContextProvider from './contexts/BookStackContext';
import EditBook from './components/EditBook';
import EditFormContextProvider from './contexts/EditFormContext';

function App() {
  return (
    <div className="App">
      <BookStackContextProvider>
          <Navbar />
          <EditFormContextProvider>
            <BookList />
            <AddBook />
            <EditBook />
          </EditFormContextProvider>
          <Footer />
      </BookStackContextProvider>
    </div>
  );
}

export default App;
