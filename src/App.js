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
    setFilteredList(holder);
    console.log(holder);
  }, [genre])

  return (
    <div className="App">
      <Title>Books on History, Anarchy, and Economics in the Order of My Bookshelf (Random)</Title>
      <GenreSelect onChange={e => setGenre(e.target.value)} name="" id="">
        <option value="All">All</option>
        <option value="Economics">Economics</option>
        <option value="History">History</option>
        <option value="War">War</option>
        <option value="Law">Law</option>
        <option value="Anarchy">Anarchy</option>
        <option value="Philosophy">Philosophy</option>
        <option value="Manifesto/Theory">Manifesto/Theory</option>
      </GenreSelect>

      <BookListDiv>
        {filteredList.map(book => {
          return <Card id={book.title} title={book.title} author={book.author} genre={book.genre} amazon={book.amazon} setGenre={setGenre} />
        })}
      </BookListDiv>
    </div>
  );
}

const Title = styled.h1`
  margin: 0 auto;
  width: 50%;
`;

const GenreSelect = styled.select`
  margin: 1rem 0;
`;

const BookListDiv = styled.div`

`;

export default App;
