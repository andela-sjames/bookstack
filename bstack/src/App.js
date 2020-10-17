import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookStackContextProvider from './contexts/BookStackContext';

function App() {
  return (
    <div className="App">
      <BookStackContextProvider>
        <Navbar />
        <BookList />
        <AddBook />
        <Footer />
      </BookStackContextProvider>
    </div>
  );
}

export default App;
