import "./App.css";
import BasicCalc from "./bodyParts/BasicCalc.js";
import DowryCalc from "./bodyParts/DowryCalc.js";
import FinanceCalc from "./bodyParts/FinanceCalc.js";
import Header from "./bodyParts/Header.js"; // Replace 'Header.jsx' with the correct casing
import {
  BrowserRouter as Router,
  Routes,  // Use Routes instead of Switch
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>  {/* Replace Switch with Routes */}
          <Route path="/BasicCalc" element={<BasicCalc />} />
          <Route path="/dowryCalc" element={<DowryCalc />} />
          <Route path="/financeCalc" element={<FinanceCalc />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
