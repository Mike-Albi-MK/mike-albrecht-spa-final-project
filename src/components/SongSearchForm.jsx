import React, { useState } from 'react';
import Header from './Header';

const SongSearchForm = () => {
    const [songName, setSongName] = useState('');
    const [iframeSrc, setIframeSrc] = useState('');
    const [error, setError] = useState('');
  
    const handleChange = (e) => {
      setSongName(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!songName || songName.trim() === '') {
        console.error('Error: The "songName" parameter is required.');
        return;
      }
  
      const songData = {
        title: "I've played it yesterday",
        type: "song",
        description: "My first own chord progression, inspired by the Beatles.",
        thumbnail_data: "",
        voicings: [
          {
            strings: "X 0 2 0 2 0",
            fingering: "X X 1 X 2 X",
            chord_name: "A,,7"
          },
          // Include other voicings as needed
        ]
      };
  
      fetch('https://api.uberchord.com/v1/song', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(songData),
      })
        .then(response => {
          // Check if the response is JSON
          if (response.ok) {
            return response.json();  // Convert the response to JSON if valid
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          console.log(data);
          // Handle data here (assuming you have a URL or content to use)
          if (data.url) {
            setIframeSrc(data.url); // Or whatever you need to do with the response
          } else {
            console.error('Unexpected response format');
          }
        })
        .catch(error => {
          console.log("Error: fetching failed", error);
          setError('Failed to fetch data. Please try again.');
        });
    };
  
    return (
      <div>
        <div className="logo">
          <a href="/">
            <h3 id="logo-name">chord spotter</h3>
          </a>
        </div>
        <Header />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="songName"
            value={songName}
            onChange={handleChange}
            placeholder="Enter chord name (e.g., F maj7)"
          />
          <button type="submit">Search</button>
          {error && <p>{error}</p>}
          {iframeSrc && (
            <iframe
              src={iframeSrc}
              frameBorder="0"
              width="100%"
              height="500px"
              sandbox="allow-scripts"
            />
          )}
        </form>
      </div>
    );
  };
  
  export default SongSearchForm;
  