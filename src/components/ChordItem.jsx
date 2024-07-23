import React from 'react';
import '../ChordItem.scss';

const ChordItem = ({chord, addToFavorites}) => {
  return (
    <div className="chordItem-container">
        <h2>{chord.symbol}</h2>
          <img src={chord.diagram} alt={`${chord.symbol} chord diagram`} />
            <p>Fingering: {chord.fingering}</p>
            <p>Frets: {chord.frets}</p>
          <button onClick={() => addToFavorites(chord)}>
          Add to favorites
          </button>
      </div>
  );
};

export default ChordItem;