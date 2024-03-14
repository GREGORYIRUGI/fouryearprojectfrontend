import React, { useState, useEffect } from 'react';

const MockGraphComponent = () => {
  const [results, setResults] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching info after 3 seconds
      setTimeout(() => {
        setResults({
          aboutApp: {
            info: 'Some information about the app',
          },
        });

        // Simulate fetching creator after another 1 second
        setTimeout(() => {
          setResults((prevResults) => ({
            aboutApp: {
              ...prevResults.aboutApp,
              creator: 'John Doe',
            },
          }));
        }, 1000);
      }, 3000);
    };

    // Fetch data after component mount
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once after mount

  return (
    <div className="graph">
      <div>
        <p>{results.aboutApp?.info}</p>
        <p>{results.aboutApp?.creator}</p>
      </div>
    </div>
  );
};

export default MockGraphComponent;
