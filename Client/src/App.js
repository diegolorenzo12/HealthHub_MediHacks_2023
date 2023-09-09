import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';

function App() {
  return (
 
      <div className="App">
        <div className="box">
          <SignIn />
          <SignUp />
          <AuthDetails />
        </div>
      </div>

    
  );
}

export default App;
