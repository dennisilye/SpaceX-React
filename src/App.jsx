import "./styles/main.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { MainHeader } from "./components/MainHeader";
import { HomePage } from "./pages/HomePage";
import { useEffect, useState } from "react";
import { landingService } from "./services/landingService";
import { LandingDetails } from "./pages/LandingDetails";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(false);
  useEffect(async () => {
    let landingData = await landingService.query(filter);
    setData(landingData);
  }, []);

  useEffect(() => {
    landingService.query(filter).then((landingData) => setData(landingData));
  }, [filter]);

  function onChangeFilter() {
    setFilter(!filter);
  }
  

  return (
    <Router>
      <div className="App">
        <MainHeader />
        <main className="container">
          <Routes>
            <Route element={<LandingDetails />} path="/landing/:id" />
            <Route
              element={<HomePage onChangeFilter={onChangeFilter} data={data} />}
              path="/"
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
