/* eslint-disable */
const apiUrl = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  try {
    const res = await fetch(`${apiUrl}/character`);
    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const createCharacters = async (character) => {
  try {
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    };

    const res = await fetch(`${apiUrl}/character`, request);
    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getCharacter = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/character/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

// export const getCharacters = () =>
//   fetch(`${apiUrl}/character`)
//     .then((res) => res.json())
//     .then((data) => data.results)
//     .catch((error) => console.error(error));

// export const getCharacter = (id) =>
//   fetch(`${apiUrl}/character/${id}`)
//     .then((res) => res.json())
//     .catch((error) => console.error(error));
