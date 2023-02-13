import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/home";
import Portofolio from "./pages/portofolio";
import Profile from "./pages/profile";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePages />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/portofolio" element={<Portofolio />} />
    </Routes>
  );
}

export default App;
