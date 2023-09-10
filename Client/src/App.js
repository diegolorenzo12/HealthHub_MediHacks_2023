import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <body className="jalalv">
      <div className="App">
        <div className="box">
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />        
        </Routes>
        <AuthDetails />
        </div>
      </div>
    </body>
    </BrowserRouter>
  );
}

export default App;
