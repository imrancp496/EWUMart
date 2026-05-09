import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import MainLayout from "./pages/MainLayout";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />}></Route>
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}
