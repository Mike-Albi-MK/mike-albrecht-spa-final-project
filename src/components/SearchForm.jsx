import React, { useState } from 'react';

const SearchForm = ({onSearch}) => {
    const [root, setRoot] = useState('');
    const [quality, setQuality] = useState('');
    const [tension, setTension] = useState('');
    const [bass, setBass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ root, quality, tension, bass});
    };

        return (
            <form className="search-form" onSubmit={handleSubmit}>
                <input 
                        type="text"
                        value={root}
                        onChange={(e) => setRoot(e.target.value)}
                        placeholder="Root" />
                
                <input 
                        type="text"
                        value={quality}
                        onChange={(e) => setQuality(e.target.value)}
                        placeholder="Quality" />

                <input 
                        type="text"
                        value={tension}
                        onChange={(e) => setTension(e.target.value)}
                        placeholder="Tension" />

                <input 
                        type="text"
                        value={bass}
                        onChange={(e) => setBass(e.target.value)}
                        placeholder="Bass" />

                <button type="submit">Search</button>
            </form>
        );
};

export default SearchForm;