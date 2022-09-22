import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Products } from "./pages/products";
import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { NotFound } from "./pages/not-found";
import { Navbar } from "./components/Navbar";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useCart } from "./context/cart";

function App() {
  const navigate = useNavigate();
  const { cartItemCount } = useCart();
  const onSearch = (searchQuery) => {
    console.log("onsearch called", `/?${createSearchParams({ q: searchQuery })}`);
    navigate(`/?${createSearchParams({ q: searchQuery })}`);
  };

  return (
    <div className="container">
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
