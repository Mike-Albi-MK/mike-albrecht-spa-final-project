import React, { useState, useEffect } from 'react';
import ChordItem from './ChordItem';
import '../SearchForm.css';

function SearchForm() {
  const [chordName, setChordName] = useState('');
  const [chordData, setChordData] = useState(null);

  async function fetchAChord() {
    try {
      const response = await fetch(`https://api.uberchord.com/v1/chords?nameLike=${chordName}`);
      const obj = await response.json();

      console.log('Fetched Chord Data:', obj);

      if (obj && obj.length > 0) {
        setChordData(obj); // Set all variations
      } else {
        setChordData(null);
        console.error('No chord data found for', chordName);
      }
    } catch (error) {
      console.error('Error fetching chords:', error);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={chordName}
        onChange={(e) => setChordName(e.target.value)}
        placeholder="Enter chord name (e.g., Fmaj7)"
      />
      <button onClick={fetchAChord}>See how to play your chord</button>
      {chordData && (
        <div className="chord-grid">
          {chordData.map((chord, index) => (
            <div key={index} className="chord-item">
              <h2>Variation {index + 1}</h2>
              <pre>{JSON.stringify(chord, null, 2)}</pre>
              <ChordItem chord={chord} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchForm;





/*
function SearchForm({ onSearch }) {
  const [chordName, setChordName] = useState('');

  const handleChange = (e) => {
    setChordName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!chordName || chordName.trim() === '') {
      console.error('Error: The "chordName" parameter is required.');
      return;
    }

    const formattedChordName = chordName.replace(/\s+/g, '_');

    fetch(`https://api.uberchord.com/v1/chords/${formattedChordName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        onSearch(data);
      })
      .catch((error) => {
        console.error('Error fetching chords:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="chordName"
        value={chordName}
        onChange={handleChange}
        placeholder="Enter chord name (e.g., Fmaj7)"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;

*/



/*function SearchForm({ onSearch }) {
  const [chordName, setChordName] = useState('');

  const [chords, setChords] = useState('');


  const handleChange = (e) => {
    setChordName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.uberchord.com/v1/embed/chords/${chordName}`)
        .then(response => response.text())
        .then(data => {
          console.log(data);
          return setChords(data)})

        .catch(error => (
          console.log("Error: fetching failed", error)
        ))

    if (!chordName || chordName.trim() === '') {
      console.error('Error: The "chordName" parameter is required.');
      return;
    }

    onSearch({ chordName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="chordName"
        value={chordName}
        onChange={handleChange}
        placeholder="Enter chord name (e.g., F maj7)"
      />
      <button type="submit">Search</button>
      <iframe
      srcDoc={chords}
      frameBorder="0"
      width="100%"
      height="100%"
      sandbox="allow-scripts"
    />
    </form>
  );
}

export default SearchForm;*/