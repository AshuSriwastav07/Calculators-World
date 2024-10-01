import "./App.css";
import BasicCalc from "./bodyParts/BasicCalc.js";
import DowryCalc from "./bodyParts/DowryCalc.js";
import FinanceCalc from "./bodyParts/FinanceCalc.js";
import Header from "./bodyParts/Header.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen min-w-max min-h-full">
        <Router>
          <Header title="Calculators World" />
          <Routes>
            <Route path="/BasicCalc" element={<BasicCalc />} />
            <Route path="/dowryCalc" element={<DowryCalc />} />
            <Route path="/financeCalc" element={<FinanceCalc />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
