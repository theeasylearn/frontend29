import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import Aboutus from './aboutus';
import Contactus from './contactus';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about-us' element={<Aboutus></Aboutus>}></Route>
          <Route path='/contact-us' element={<Contactus></Contactus>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
