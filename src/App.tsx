import Header from "./components/header/Header";
import "./App.css";
// import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/home/Home";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
