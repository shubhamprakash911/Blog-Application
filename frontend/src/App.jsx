import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
      </Routes>

      <Routes>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>

      <Routes>
        <Route path="/update/:id" element={<UpdatePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
