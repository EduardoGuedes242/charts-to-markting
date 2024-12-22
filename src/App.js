import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import PageCustomer from "./pages/customer";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "200px", padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer" element={<PageCustomer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
