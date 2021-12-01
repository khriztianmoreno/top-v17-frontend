import DB from '../assets/db.json';

export const getAllProducts = () => {
  if (DB.products) {
    return Promise.resolve(DB.products);
  }

  return Promise.reject(new Error('No products found'));
};

export const getDetailProduct = (id) => {
  const product = DB?.products.find((item) => item.id === id);
  return product || {};
};
