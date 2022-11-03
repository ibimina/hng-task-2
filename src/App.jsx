import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Linktree from "./pages/Linktree";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Linktree />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
