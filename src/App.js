
import Home from './component/Home';
import About from './component/About';
import Nav from './component/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
