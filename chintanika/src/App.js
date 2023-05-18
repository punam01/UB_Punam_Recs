import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { About } from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextEditor from "./components/TextEditor";
import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MyArticles from "./components/MyArticles";

function App() {
  const [content, setContent] = useState("");
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/texteditor"
            element={<TextEditor setContent={setContent} />}
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/myarticles" element={<MyArticles />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
