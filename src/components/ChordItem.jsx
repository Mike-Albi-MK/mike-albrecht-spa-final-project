import React, { useEffect, useRef } from 'react';
import { ChordBox } from 'vexchords';

const ChordItem = ({ chord }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (chord && canvasRef.current) {
      // Clear the previous chord diagram
      canvasRef.current.innerHTML = '';

      const chordBox = new ChordBox(canvasRef.current, {
        width: 200, // Adjust width as needed
        height: 240, // Adjust height as needed
        circleRadius: 5,
        numStrings: 6,
        numFrets: 5,
        showTuning: true,
        defaultColor: '#000000',
        bgColor: '#FFF',
        strokeColor: '#000000',
        textColor: '#000000',
        stringColor: '#000000',
        fretColor: '#000000',
        labelColor: '#000000',
        fretWidth: 1,
        stringWidth: 1,
      });

      // Log the chord object to inspect the data
      console.log('Chord Data:', chord);

      const chordPositions = chord.strings.split(' ').map((fret, i) => {
        const stringIndex = 6 - i; // Reverse the string index to correct inversion
        if (fret === 'X') return [stringIndex, 'x'];
        if (fret === '0') return [stringIndex, 0];
        return [stringIndex, parseInt(fret, 10)];
      });

      console.log('Chord Positions:', chordPositions);

      chordBox.draw({
        chord: chordPositions,
        position: 1, // Starting fret position
        barres: [], // Assuming no barres in this example, but you can adjust
        tuning: ['E', 'A', 'D', 'G', 'B', 'E'],
      });
    }
  }, [chord]);

  return <div ref={canvasRef}></div>;
};

export default ChordItem;

/*
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

*/