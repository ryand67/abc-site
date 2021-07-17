import './App.css';
import bookList from './util/BookList';
import Card from './util/Card';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {

  const [filteredList, setFilteredList] = useState([]);
  const [genre, setGenre] = useState('All');

  useEffect(() => {
    const holder = bookList.filter(item => {
      if(genre === 'All') {
        return item;
      } else if (item.genre.includes(genre)) {
        return item;
      }
    })
    console.log(holder);
  }, [genre])

  return (
    <div className="App">
      <GenreSelect onChange={e => setGenre(e.target.value)} name="" id="">
        <option value="All">All</option>
        <option value="Economics">Economics</option>
        <option value="History">History</option>
        <option value="War">War</option>
        <option value="Legal">Legal</option>
        <option value="Anarchy">Anarchy</option>
        <option value="Philosophy">Philosophy</option>
        <option value="Manifesto/Theory">Manifesto/Theory</option>
      </GenreSelect>
    </div>
  );
}

const GenreSelect = styled.select``;

export default App;
