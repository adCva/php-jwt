import './Reset.css';
import './Scss/style.css';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import Landing  from "./Pages/Landing";
import Home from "./Pages/Home";
import Dash from "./Pages/Dash";


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
