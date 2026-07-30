import "./assets/styles/App.css";
import { Routes, Route } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { CourseDetails } from "./pages/CourseDetails";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/courses/:id" element={<CourseDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
