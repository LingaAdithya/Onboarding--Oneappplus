import os
import pandas as pd
from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import TfidfVectorizer
import joblib
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# File paths for different verticals
file_paths = {
    'Apparel & Fashion': r"../content/Apparel & Fashion.csv",
    'Food': r"../content/Food Data.csv",
    'Gifts & Crafts': r"../content/Gifts & Crafts.csv",
    'Grocery': r"../content/Grocery Data.csv",
    'Meat': r"../content/Meat Data.csv",
    'Pharma': r"../content/Pharma Data.csv",
    'Security & Protection': r"../content/Security & Protection.csv",
    'Transportation': r"../content/Transportation.csv"
}

# Load CSV files into DataFrames
dataframes = {}
for vertical, path in file_paths.items():
    if os.path.exists(path):
        dataframes[vertical] = pd.read_csv(path)
    else:
        print(f"File for {vertical} not found at {path}")

# Load the models and vectorizers for each vertical
models = {}
vectorizers = {}
for vertical in file_paths.keys():
    model_path = f'random_forest_{vertical.replace(" ", "_").lower()}.pkl'
    vectorizer_path = f'random_forest_vectorizer_{vertical.replace(" ", "_").lower()}.pkl'

    if os.path.exists(model_path) and os.path.exists(vectorizer_path):
        models[vertical] = joblib.load(model_path)
        vectorizers[vertical] = joblib.load(vectorizer_path)
    else:
        print(f"Model or vectorizer for {vertical} not found.")

# API endpoint to list all verticals
@app.route('/verticals', methods=['GET'])
def list_verticals():
    return jsonify(list(dataframes.keys()))

# API endpoint to get categories for a specific vertical
@app.route('/categories/<vertical>', methods=['GET'])
def get_categories(vertical):
    if vertical not in dataframes:
        return jsonify({'error': 'Invalid vertical specified'}), 400
    
    df = dataframes[vertical]
    categories = df['Category'].unique().tolist()
    return jsonify(categories)

# API endpoint to get products for a specific vertical and category
@app.route('/products/<vertical>/<category>', methods=['GET'])
def get_products(vertical, category):
    if vertical not in dataframes:
        return jsonify({'error': 'Invalid vertical specified'}), 400

    df = dataframes[vertical]
    products = df[df['Category'] == category]['Product Name'].unique().tolist()
    return jsonify({'products': products})



# API endpoint to search for products based on a query
@app.route('/search-products/<vertical>', methods=['GET'])
def search_products(vertical):
    query = request.args.get('query', '')
    if vertical not in dataframes:
        return jsonify({'error': 'Invalid vertical specified'}), 400

    df = dataframes[vertical]
    matching_products = df[df['Product Name'].str.contains(query, case=False, na=False)]['Product Name'].unique().tolist()
    return jsonify({'products': matching_products})

# Function to predict category for input data using loaded models and vectorizers
def predict_category(input_data, vertical):
    try:
        vectorizer = vectorizers[vertical]
        model = models[vertical]

        # Transform input data using the loaded TF-IDF vectorizer
        input_vector = vectorizer.transform([input_data]).toarray()[0]

        # Use the model to predict a category or other property
        prediction = model.predict([input_vector])[0]

        return prediction
    except Exception as e:
        raise ValueError(f"Prediction error: {str(e)}")

@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the POST request
    data = request.json

    # Ensure data is in the expected format
    if 'product_name' not in data or 'vertical' not in data:
        return jsonify({'error': 'Invalid input data provided'}), 400

    # Extract input data and vertical
    input_data = data['product_name']
    vertical = data['vertical']

    try:
        # Predict category using the model
        prediction = predict_category(input_data, vertical)

        # Combine the prediction and top similar products
        result = {
            'predicted_category': prediction,  # Ensure this key matches what the frontend expects
        }

        return jsonify(result), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# API endpoint to get random products for a specific vertical and category
@app.route('/random-products', methods=['POST'])
def random_products():
    data = request.get_json()
    vertical = data.get('vertical')
    category = data.get('category')
    count = data.get('count', 5)

    if vertical not in dataframes:
        return jsonify({'error': 'Invalid vertical specified'}), 400

    df = dataframes[vertical]
    products = df[df['Category'] == category]['Product Name'].unique().tolist()
    
    if len(products) == 0:
        return jsonify({'error': 'No products found for this category'}), 400

    random_products = random.sample(products, min(count, len(products)))
    return jsonify({'products': random_products})



if __name__ == '__main__':
    app.run(debug=True)
