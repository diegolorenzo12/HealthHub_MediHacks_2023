import "./App.css";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "./components/Pages/Calendar";
import Home from "./components/Pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes className="pagesContainer">
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
