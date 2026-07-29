import "./assets/styles/App.css";
import { Routes, Route } from "react-router";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
