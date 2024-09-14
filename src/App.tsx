
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Home } from './Pages/Home/Home';
import Header from './components/Header/Header';
import AboutUs from './Pages/AboutUs/AboutUs';
import OurDoctors from './Pages/OurDoctors/OurDoctors';
import DoctorPage from './Pages/DoctorPage/DoctorPage';
import OurServices from './Pages/OurServices/OurServices';
import ServicesProfile from './Pages/ServicesProfile/ServicesProfile';
// import Footer from './components/Footer/Footer';




const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <div className="body_content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/our-team' element={<OurDoctors />} />
            <Route path='/our-team/:id' element={<DoctorPage/>} />
            <Route path='/our-services' element={<OurServices/>} />
            <Route path='/our-services/:id' element={<ServicesProfile/>} />

          </Routes>
        </div>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App