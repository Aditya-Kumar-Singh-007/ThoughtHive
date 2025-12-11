import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ViewNote from "./components/ViewNote";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import WriteNote from "./components/WriteNote";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/getallnotes" element={<ViewNote />}></Route>
            <Route path="/addnote" element={<WriteNote />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
