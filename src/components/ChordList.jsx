import React from 'react';
import ChordItem from './ChordItem';

const ChordList = ({chords, addToFvorites}) => {
  return (
    <div className="chordList-container">
    {chords.length === 0 ? (
        <p></p>
      ) : (
        <ul>
          {chords.map((chord, index) => (
            <li key={index}>
              <ChordItem chord={chord} addToFavorites={addToFavorites} />
            </li>
          ))}
        </ul>
      )}
        </div>
  );
};

export default ChordList;