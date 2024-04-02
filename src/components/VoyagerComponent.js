import React, { useState } from 'react';
import { Voyager } from 'graphql-voyager';

const VoyagerComponent = () => {
  const [introspection, setIntrospection] = useState(null);
  const [inputType, setInputType] = useState('url'); // Default input type

  const handleUrlSubmit = async (event) => {
    event.preventDefault();
    const url = event.target.url.value;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setIntrospection(data);
    } catch (error) {
      console.error('Error fetching introspection:', error);
      // Handle error gracefully (e.g., display an error message)
    }
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const query = event.target.query.value;
    setIntrospection(JSON.parse(query)); // Parse user-provided JSON
  };

  const handleInputChange = (event) => {
    setInputType(event.target.value);
  };

  return (
    <div>
      <h2>GraphQL Voyager</h2>
      <form onSubmit={inputType === 'url' ? handleUrlSubmit : handleInputSubmit}>
        {inputType === 'url' && (
          <div>
            <label htmlFor="url">Introspection URL:</label>
            <input type="text" id="url" name="url" required />
          </div>
        )}
        {inputType === 'input' && (
          <div>
            <label htmlFor="query">Introspection Query:</label>
            <textarea id="query" name="query" rows="10" required></textarea>
          </div>
        )}
        <button type="submit">Load Introspection</button>
      </form>
      <br />
      <select value={inputType} onChange={handleInputChange}>
        <option value="url">Introspection URL</option>
        <option value="input">Introspection Query</option>
      </select>
      <br />
      {introspection && <Voyager introspection={introspection} />}
    </div>
  );
};

export default VoyagerComponent;
