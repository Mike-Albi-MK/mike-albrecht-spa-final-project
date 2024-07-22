import React from 'react';

const ChordItem = ({chord}) => {
  return (
    <div className="chordItem-container">
        <h2>{chord.symbol}</h2>
        <img src="" alt="" />
        <p>Fingering: {chord.fingering}</p>
        <p>Frets: {chord.frets}</p>
        <button>Add to favorites</button>
        </div>
  );
};

export default ChordItem;