import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScore from './pages/FinalScore';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScore />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
