import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calendar from './Pages/Calendar'
import Account from './Pages/Account'
import Home from './Pages/Home';
import Navbar from './Navbar';
import  './App.css'


function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <body className="jalalv">
      <div className="App">
        <div className="box">
        <Routes>
          <div className='container'>
          <Route path='/' element={<Home />}/>
          <Route path='/calendar' element={<Calendar />}/>
          <Route path='/account' element={<Account />}/>
          </div>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />        
        </Routes>
        <AuthDetails />
        </div>
      </div>
    </body>
    </BrowserRouter>
    </>
  );
}

export default App;

