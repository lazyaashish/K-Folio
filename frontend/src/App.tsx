
import Background from "./pages/Landing/Background"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import Home from "./pages/Home"
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Background />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
