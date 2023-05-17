import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import {About} from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TextEditor from './components/TextEditor';
import { useState } from 'react';

function App() {
  const [content,setContent]=useState("");
  return (
    <>
    <Router>
    <Routes>
      <Route path='/about' element={<About />}>
      </Route>
      <Route path='/' element={<Home/> } >
      </Route>
      <Route path='/texteditor' element={<TextEditor setContent={setContent}/> } >
      </Route>
    </Routes>
    </Router>
    <Footer></Footer>    
    </>
  );
}

export default App;
