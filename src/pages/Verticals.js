import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Verticals({ handleVerticalChange }) {
  const [verticals, setVerticals] = useState([]);
  const [selectedVertical, setSelectedVertical] = useState('');

  useEffect(() => {
    const fetchVerticals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/verticals');
        setVerticals(response.data);
      } catch (error) {
        console.error('Error fetching verticals:', error);
      }
    };

    fetchVerticals();
  }, []);

  const handleChange = (event) => {
    const selectedVertical = event.target.value;
    setSelectedVertical(selectedVertical);
    handleVerticalChange(selectedVertical);
  };

  return (
    <div>
      <select value={selectedVertical} onChange={handleChange}>
        <option value="">Select a vertical</option>
        {verticals.map((vertical) => (
          <option key={vertical} value={vertical}>
            {vertical}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Verticals;
