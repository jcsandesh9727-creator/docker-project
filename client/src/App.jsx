import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>React Docker App</h1>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
      </Routes>
    </div>
  );
}

export default App;