import React, { useState } from 'react';
import { Voyager } from 'graphql-voyager';
import './components.css';

const VoyagerComponent = () => {
  const [introspection, setIntrospection] = useState(null);
  const [inputType, setInputType] = useState('url'); // Default input type
  const [displayInput,setDisplayInput] = useState(true)

  const handleDownload = () =>{
    setDisplayInput(false)
  }

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const query = event.target.query.value;
    setIntrospection(JSON.parse(query)); // Parse user-provided JSON
    setDisplayInput(false)
  };

  return (
    <div>
      <h2>GraphQL Voyager</h2>
      {
        displayInput ? (
          <div>
          <form onSubmit={handleInputSubmit}>
          
            <div>
              <label htmlFor="query">Introspection Query:</label>
              <textarea className="queryIntro" id="query" name="query" rows="10" required></textarea>
            </div>
          
          <button type="submit">Load Introspection</button>
        </form>
        <br />
        
        </div>
        ): <div></div>
      }
     
      <br />
      <div className="voyager">
        {introspection && (
          <>
            <Voyager introspection={introspection} displayOptions={{ display: { layout: 'graphOnly' } }} />
            <button onClick={handleDownload}>Download Introspection</button>
            
          </>
          
        )}
      </div>
    </div>
  );
};

export default VoyagerComponent;
