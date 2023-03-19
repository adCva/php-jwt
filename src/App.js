import './Reset.css';
import './Scss/style.css';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Dash from './Pages/Dash';


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Create />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
