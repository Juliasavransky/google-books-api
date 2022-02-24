import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import Search from './components/Search';






function App() {
  const [book, setBook] = useState("");
  const [booksResults, setBooksResults] = useState([]);
  const [error, setError] = useState(false);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;


  const handleChange = (e) => {
    const search = e.target.value;
    setBook(search)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setBook("")
    fetchBooks()
  }

  const fetchBooks = async () => {
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?q=${book}&maxResults=10`);
      setBooksResults(result.data.items);
      console.log(result.data.items);
    }
    catch (error) {
      setError(true);
    }
  }


  return (
    <div className="main-container">

      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        book={book}
      />
      <div className="card-container" >
        <Card
          booksResults={booksResults}
        />
      </div>
    </div>
  );
}

export default App;
