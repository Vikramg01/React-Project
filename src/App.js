
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact_us from './components/Contact_us';
import Home from './components/Home';
import Order from './components/Order';
import Signin from './components/Signin';




function App() {
  return (
   
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Contact_us' element={<Contact_us />}></Route>
      <Route path='/Order' element={<Order />}></Route>
      <Route path='/Signin' element={<Signin />}></Route>
    </Routes>
    </>
  );
}

export default App;
