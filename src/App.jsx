import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}
