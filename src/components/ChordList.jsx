import React from 'react';
import ChordItem from './ChordItem';

const ChordList = ({chords}) => {
  return (
    <div className="chordList-container">
            {chords.map(chord => (
                <ChordItem key={chord.id} chord={chord} />
            ))}
        </div>
  );
};

export default ChordList;