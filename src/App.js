import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
