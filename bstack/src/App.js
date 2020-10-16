import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
      <AddBook />
      <Footer />
    </div>
  );
}

export default App;
