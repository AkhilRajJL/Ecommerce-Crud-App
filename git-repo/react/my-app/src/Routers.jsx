import React from 'react'
import{BrowserRouter,Routes,Route}from"react-router-dom"
import Navbar from './Navbar/Navbar'
import Login from './Pages/Login/Login'
import Footer from './Footer/Footer'
import LandingPage from './Pages/LandingPage/LandingPage'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Signup from './Signup/Reg'
import ForgetPassword from './Forgetpassword/Forpass'
import Welcomepage from './Welcomepage/Swipe'
import Home from './Home/Home'
import ProductDetails from './Home/ProductDetails'

function Routers() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='landing'
          element={
            <>
            <Navbar/>
            <LandingPage/>
            <Footer/>
            </>
          }
          >

          </Route>
            <Route path='/login'
            element={
                <>
                <Navbar/>
                <Login/>
                <Footer/>
                </>
            }
            ></Route>
             <Route path='/contact'
            element={
                <>
                <Navbar/>
               <Contact/>
                <Footer/>
                </>
            }
            ></Route>
             <Route path='/about'
            element={
                <>
                <Navbar/>
               <About/>
                <Footer/>
                </>
            }
            ></Route>
            <Route path='reg'
          element={
            <>
             <Signup/>
            </>
          }
          >
          </Route>
          <Route path='pass'
          element={
            <>
            <ForgetPassword/>
            </>
          }
          >
          </Route>
          <Route path='/'
          element={
            <>
          <Welcomepage/>
            </>
          }
          >
          </Route>
          
         
          <Route path='/home'
          element={
            <>
          <Navbar/>
          <Home/>
          <Footer/>
            </>
          }
          >

          </Route>
          <Route path='/Productdetails/:id'
            element={
                <>
                <Navbar/>
                <ProductDetails/>
                <Footer/>
                </>
            }
            ></Route>
        </Routes>
        </BrowserRouter>
      
      
    </div>
  )
}

export default Routers
