import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Compose from "./components/Compose"
import Public from "./components/Public";
import "./App.css"

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/compose" element={<Compose />} />
                    <Route path="/public" element={<Public />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
