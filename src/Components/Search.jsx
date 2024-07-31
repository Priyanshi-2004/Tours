import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); // State to manage when to show suggestions
  
  useEffect(() => {
    // Fetch data from your API
    axios.get('http://localhost:9000/states')
      .then(response => {
        setSuggestions(response.data); // Assuming response.data is an array of state objects
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setShowSuggestions(value.length > 0); // Show suggestions only if input has some length
  };

  const handleInputClick = () => {
    setShowSuggestions(true); // Show suggestions when input is clicked
  };

  const handleSuggestionClick = (value) => {
    setInputValue(value);
    setShowSuggestions(false); // Hide suggestions after selecting one
  };

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.name.toLowerCase().startsWith(inputValue.toLowerCase()) // Filter based on start of name
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onClick={handleInputClick} // Handle click event to show suggestions
        placeholder="Type to search..."
      />
      {showSuggestions && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion.name)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
