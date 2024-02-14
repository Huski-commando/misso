import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Search = lazy(() => import("./pages/Search"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const OrderHistory = lazy(() => import("./pages/OrderHistory"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Reset = lazy(() => import("./pages/auth/Reset"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
