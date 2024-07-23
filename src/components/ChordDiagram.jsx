import React, { useEffect, useRef } from 'react';
import { ChordBox } from 'vexchords';

const ChordItem = ({ chord }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (chord && canvasRef.current) {
      // Clear the previous chord diagram
      canvasRef.current.innerHTML = '';

      const chordBox = new ChordBox(canvasRef.current, {
        width: 100,
        height: 120,
        circleRadius: 5,
        numStrings: 6,
        numFrets: 5,
        showTuning: true,
        defaultColor: '#666',
        bgColor: '#FFF',
        strokeColor: '#666',
        textColor: '#666',
        stringColor: '#666',
        fretColor: '#666',
        labelColor: '#666',
        fretWidth: 1,
        stringWidth: 1,
      });

      chordBox.draw({
        chord: chord.chord,
        position: chord.position,
        barres: chord.barres,
        tuning: chord.tuning,
      });
    }
  }, [chord]);

  return <div ref={canvasRef}></div>;
};

export default ChordItem;
/*
import '../ChordDiagram.css';

const ChordDiagram = ({ chord }) => {
  if (!chord) {
    return null;
  }

  const { strings, fingering, chordName } = chord;
  const stringArray = strings.split(' ');
  const fingeringArray = fingering.split(' ');

  return (
    <div className="chord-diagram">
      <h3>{chordName}</h3>
      <div className="diagram">
        {stringArray.map((string, index) => (
          <div key={index} className="string">
            <div className="fret">{string}</div>
            <div className="finger">{fingeringArray[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChordDiagram;

*/