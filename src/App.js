
import { useState } from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Dashboard from './pages/Dashboard';
import StaticNavigation from './pages/StaticNavigation';
import LightSidenav from './pages/LightSidenav';
import Error from './components/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPass from './pages/ForgetPass';
import ChartPage from './pages/ChartPage';
import TablePage from './pages/TablePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const toggleNav = () => {
    setIsNavVisible((visible) => !visible);

  }

  return (
    <>
      <BrowserRouter>
        <div className="page">
          <div className="nav-container">
            <Navbar toggleNav={toggleNav} />
          </div>
          <div className={`side-container bg-dark  ${isNavVisible ? "close-side" : " "} `}>
            <SideNav />

          </div>
          <div className={`main-container ${isNavVisible ? "full-width" : " "} `}>

            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/StaticNavigation' element={<StaticNavigation />} />
              <Route path='/SideNavigation' element={<LightSidenav />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/ForgetPassword' element={<ForgetPass />} />
              <Route path='/Error401' element={<Error error='401' />} />
              <Route path='/Error402' element={<Error error='402' />} />
              <Route path='/Error403' element={<Error error='403' />} />
              <Route path='/Error500' element={<Error error='500' />} />
              <Route path='/Charts' element={<ChartPage />} />
              <Route path='/Tables' element={<TablePage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter >
    </>
  );
}

export default App;
