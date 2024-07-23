import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import ChordItem from './components/ChordItem';
import ChordList from './components/ChordList';
import SearchForm from './components/SearchForm';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import './App.css'

function App() {
  const [chords, setChords] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (searchParams) => {
    try {
      const { chordName } = searchParams;
  
      if (!chordName || chordName.trim() === '') {
        console.error('Error: The "chordName" parameter is required.');
        return;
      }
  
      const formattedChordName = chordName.replace(/\s+/g, '_');
      const response = await fetch(`https://api.uberchord.com/v1/chords/${formattedChordName}`);
      const contentType = response.headers.get('Content-Type');
  
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setChords([data]); // Ensure data is an array to match your components' expectations
      } else {
        console.error('Unexpected content type:', contentType);
        const text = await response.text();
        console.error('Response text:', text);
      }
    } catch (error) {
      console.error('Error fetching chords:', error);
    }
  };

  const addToFavorites = (chord) => {
    setFavorites([...favorites, chord]);
  };
 
  return (
    <div>
        <Routes>
            <Route path='/' element={<Header />}/>
              <Route index element={<Home />}/>

             
              <Route path='/search-form' element={<SearchForm onSearch={handleSearch} />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route path='/chord-item' element={<ChordItem />}/>
              <Route path='/chord-list' element={<ChordList chords={chords} addToFavorites={addToFavorites} />}/>
              <Route path='*' element={<NotFound />}/>
        </Routes>
      
    </div>
  )
}

export default App
