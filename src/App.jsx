import {BrowserRouter,Routes,Route} from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './App.css'

import About from "./Components/2_Home_About_Component/About";
import Contact from "./Components/4_Contact_Component/Contact";
import Home from "./Components/2_Home_About_Component/Home"
import Service from "./Components/3_Service_Component/Service";
import Navbar from './Components/1_Navbar_Component/Navbar';
import Footer from './Components/5_Footer_Component/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Service/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
