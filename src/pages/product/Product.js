import "./Product.css";
import { useEffect, useState } from "react";
import { FakeStoreApi } from "../../services/fake-store-api";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/cart";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const product = await FakeStoreApi.fetchProductById(productId);
      setLoading(false);
      setProduct(product);
    };
    fetchProduct().catch(() => setLoading(false));
  }, [productId]);

  if (!product && !loading) {
    return (
      <div className="container">
        <div className="product py-2">
          <div className="details p-3">
            Product not found. Please visit{" "}
            <Link to="/" replace>
              home
            </Link>{" "}
            to see all available products
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {loading ? (
        <div className={"loader"}></div>
      ) : (
        <div className="product py-2">
          <div className="details grid p-3">
            <div className="product-image">
              <img src={product.image} alt="product-image" />
            </div>
            <div className="info">
              <div className="description">
                <h3>{product.title}</h3>
                <p className=" my-2">{product.description}</p>
              </div>
              <div className="flex">
                <span className="price">${product.price}</span>
                <span className="cart" onClick={() => addToCart(product)}>
                  <img src="/cart.svg" alt="cart-icon" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Product };
