import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from './Products'; // Import the Products component
import SearchBar from './SearchBar'; // Import the SearchBar component

function Categories({ vertical }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/categories/${vertical}`);
        setCategories(response.data);
      } catch (error) {
        console.error(`Error fetching categories for ${vertical}:`, error);
      }
    };

    if (vertical) {
      fetchCategories();
    }
  }, [vertical]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedProduct('');
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h2>Categories in {vertical}</h2>
      <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <>
          <SearchBar vertical={vertical} onProductSelect={handleProductSelect} />
          <Products vertical={vertical} category={selectedCategory} />
        </>
      )}
    </div>
  );
}

export default Categories;
