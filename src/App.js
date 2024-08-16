import "./App.css";
import Navbar from "./Component/basic";
import Counting from "./Component/Counting";
import List from "./Component/ConditionalRender";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Counting />
      <List /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/counting" element={<Counting />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
