import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ vertical, onProductSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [predictedCategory, setPredictedCategory] = useState('');

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      try {
        const response = await axios.get(`http://localhost:5000/search-products/${vertical}`, {
          params: { query: value }
        });
        setSuggestions(response.data.products);
      } catch (error) {
        console.error('Error fetching product suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    onProductSelect(suggestion);

    try {
      const response = await axios.post('http://localhost:5000/predict', {
        vertical: vertical,
        product_name: suggestion
      });

      // Ensure to access the correct key from the response data
      setPredictedCategory(response.data.predicted_category);
    } catch (error) {
      console.error('Error predicting product category:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a product"
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {query && (
        <p>Category of searched product: {predictedCategory}</p>
      )}
    </div>
  );
}

export default SearchBar;