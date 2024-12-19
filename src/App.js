import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Bookdemo from './pages/Bookdemo';


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/bookdemo" element={<Bookdemo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
