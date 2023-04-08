import './App.css';
import SignIn from './component/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from './component/SignUp';
import HomePage from './component/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="SignUp" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="homePage" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
