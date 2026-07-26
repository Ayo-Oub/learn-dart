import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./pdf.css";

// Components
import Layout from "./components/Layout";

// Pages
import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";
import Lesson5 from "./pages/Lesson5";
import Lesson6 from "./pages/Lesson6";
import Lesson7 from "./pages/Lesson7";
import Lesson8 from "./pages/Lesson8";
import Lesson9 from "./pages/Lesson9";
import Lesson10 from "./pages/Lesson10";
import Lesson11 from "./pages/Lesson11";
import Lesson12 from "./pages/Lesson12";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {/* Redirect root to first lesson */}
        <Route
          index
          element={
            <Navigate
              to="/lesson/1"
              replace
            />
          }
        />

        {/* Lesson Routes */}
        <Route
          path="lesson/1"
          element={<Lesson1 />}
        />
        <Route
          path="lesson/2"
          element={<Lesson2 />}
        />
        <Route
          path="lesson/3"
          element={<Lesson3 />}
        />
        <Route
          path="lesson/4"
          element={<Lesson4 />}
        />
        <Route
          path="lesson/5"
          element={<Lesson5 />}
        />
        <Route
          path="lesson/6"
          element={<Lesson6 />}
        />
        <Route
          path="lesson/7"
          element={<Lesson7 />}
        />
        <Route
          path="lesson/8"
          element={<Lesson8 />}
        />
        <Route
          path="lesson/9"
          element={<Lesson9 />}
        />
        <Route
          path="lesson/10"
          element={<Lesson10 />}
        />
        <Route
          path="lesson/11"
          element={<Lesson11 />}
        />
        <Route
          path="lesson/12"
          element={<Lesson12 />}
        />
      </Route>
    </Routes>
  );
}

export default App;
