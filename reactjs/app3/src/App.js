import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import Aboutus from './aboutus';
import Contactus from './contactus';
import Layout from './layout';
import NoPage from './404';
import AddStudent from './addStudent';
import ViewStudent from './viewStudent';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about-us' element={<Aboutus></Aboutus>}></Route>
            <Route path='/contact-us' element={<Contactus></Contactus>}></Route>
            <Route path='/add-student' element={<AddStudent />}></Route>
            <Route path='/view-student/:name/:age' element={<ViewStudent />}></Route>
            <Route path='*' element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
