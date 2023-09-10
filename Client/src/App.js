import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';


function App() {
  return (
    <body className="jalalv">
      <div className="App">
        <div className="box">
          <SignIn />
          <SignUp />
          <AuthDetails />
        </div>
      </div>
    </body>
   

    
  );
}

export default App;
