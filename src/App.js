import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path='/'></Route>
          <Route path='/about'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
