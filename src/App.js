
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Userdetail from './components/Userdetail/Userdetail';
import Consultantdetail from './components/Consultantdetail/Consultantdetail';
import Admintab from './components/Admintab/Admintab';
function App() {
  return (
    <Router>
    <div className="App">
      
      <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route exact path="/Userdetails" element={<Userdetail/>}></Route>

      <Route exact path="/Consultantdetails" element={<Consultantdetail/>}></Route>
      <Route exact path="/admintab" element={<Admintab/>}></Route>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
