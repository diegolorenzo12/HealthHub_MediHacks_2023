import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './components/Pages/Calendar'
import Account from './components/Pages/Account'
import Home from './components/Pages/Home';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="jalalv">
        <div className="App">
          <div className="box">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/calendar' element={<Calendar />}/>
            <Route path='/account' element={<Account />}/>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />        
          </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;

