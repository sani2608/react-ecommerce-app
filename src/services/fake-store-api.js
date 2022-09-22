const FakeStoreApi = {
  fetchAllProducts: async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    return result;
  },
  fetchProductById: async (productId) => {
    let result;
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      result = await res.json();
    } catch (error) {
      throw new Error("product not found");
    }
    return result;
  },
  fetchProductsBySearchQuery: async (query) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    return result.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  },
};

export { FakeStoreApi };
