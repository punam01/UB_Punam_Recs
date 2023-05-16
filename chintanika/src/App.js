import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import {About} from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar heading="Chintanika"></Navbar>
    <Routes>
      <Route path='/about' element={<About />}>
      </Route>
      <Route path='/' element={<Home />}>
      </Route>
    </Routes>
    </Router>
    <Footer></Footer>    
    </>
  );
}

export default App;
