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
import Ballpit from "./Ballpit";

function App() {
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#000000'
      }}>
        <Ballpit
          count={60}
          colors={[0xff6b6b, 0x4ecdc4, 0x45b7d1, 0x96ceb4, 0xfeca57, 0xff9ff3]}
          gravity={0.015}
          friction={0.998}
          wallBounce={0.8}
          maxVelocity={0.06}
        />
      </div>
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
