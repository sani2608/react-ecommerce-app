const FakeStoreApi = {
  fetchAllProducts: async () => {
    const res = await fetch("https://fakstoreapi.com/products");
    const result = await res.json();
    return result;
  },
  fetchProductById: async (productId) => {
    const res = await fetch(`https://fakstoreapi.com/product/${productId}`);
    const result = await res.json();
    return result;
  },
  fetchProductsBySearchQuery: async (query) => {
    const res = await fetch("https://fakstoreapi.com/products");
    const result = await res.json();
    return result.filter((product) => product.title.toLowerCase().includes(query));
  },
};

export { FakeStoreApi };
