import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
