import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Favourites from './pages/favourites/Favourites';
import Footer from './components/footer/Footer';
import Aboutus from './pages/aboutus/Aboutus';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <AppProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/favourites' element={<Favourites />}/>
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </div>
      </AppProvider>
    </Router>
  );
}

export default App;
