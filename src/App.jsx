/* eslint-disable */
import { useState, useEffect } from 'react';
import axios from 'axios';

import Product from './components/examples/Product';

import { getAllProducts } from './services/products';
import { getCharacters } from './services/characters';

import './App.scss';

const getPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const { data } = await axios.get(url);
  console.log('🚀 ~ file: App.jsx ~ line 17 ~ getPosts ~ response', data);

  // const url = new URL('https://jsonplaceholder.typicode.com/posts');

  // const headers = new Headers({
  //   'Content-Type': 'application/json',
  //   Authorization: 'Basic YXBpOmFwaQ==',
  // });

  // const req = new Request(url, {
  //   method: 'GET',
  //   headers,
  // });

  // const res = await fetch(req);
  // const data = await res.json();
};

const createPost = async (post) => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const { data } = await axios.post(url, post);
  console.log('🚀 ~ file: App.jsx ~ line 38 ~ createPost ~ data', data);

  // const url = new URL('https://jsonplaceholder.typicode.com/posts');

  // const headers = new Headers({
  //   'Content-Type': 'application/json',
  // });

  // const req = new Request(url, {
  //   method: 'POST',
  //   headers,
  //   body: JSON.stringify(post),
  // });

  // const res = await fetch(req);
  // const data = await res.json();
};

const App = () => {
  const [products, setProducts] = useState([]);
  const [characters, setCharacters] = useState([]);

  const post = {
    title: 'foo',
    body: 'bar baz qux',
    userId: 1,
  };

  useEffect(() => {
    // getPosts();

    createPost(post);
    // const fetchCharacters = async () => {
    //   const characters = await getCharacters();
    //   setCharacters(characters);
    // };

    // fetchCharacters();
  }, []);

  // useEffect(() => {
  //   const getMyProducts = async () => {
  //     try {
  //       const data = await getAllProducts();

  //       setTimeout(() => {
  //         setProducts(data);
  //       }, 3000);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getMyProducts();
  // }, []);

  return (
    <div className="App">
      {characters.length > 0 ? (
        characters.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>
              {character.name} - {character.status}
            </p>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      {/* {products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <h1>Loading...</h1>
      )} */}
    </div>
  );
};
export default App;
