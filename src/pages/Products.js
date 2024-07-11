import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products({ vertical, category, searchedProduct }) {
  const [randomProducts, setRandomProducts] = useState([]);
  const [predictedCategory, setPredictedCategory] = useState('');

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const response = await axios.post('http://localhost:5000/random-products', {
          vertical: vertical,
          category: category,
          count: 5 // Fetch 5 random products
        });
        setRandomProducts(response.data.products);
      } catch (error) {
        console.error(`Error fetching random products for ${category}:`, error);
      }
    };

    if (category) {
      fetchRandomProducts();
    }
  }, [vertical, category, searchedProduct]); // Include searchedProduct in dependency array

  useEffect(() => {
    const fetchPredictedCategory = async () => {
      try {
        const response = await axios.post('http://localhost:5000/predict-category', {
          product: searchedProduct
        });
        setPredictedCategory(response.data.category);
      } catch (error) {
        console.error(`Error predicting category for ${searchedProduct}:`, error);
      }
    };

    if (searchedProduct) {
      fetchPredictedCategory();
    }
  }, [searchedProduct]);

  return (
    <div>
      {randomProducts.length > 0 ? (
        <div>
          <h3>Suggested Products in {category}</h3>
          <ul>
            {randomProducts.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
}

export default Products;