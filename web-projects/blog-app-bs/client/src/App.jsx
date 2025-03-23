import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Projects from "./pages/Projects.jsx";
import AboutMe from "./pages/AboutMe.jsx"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/projects" exact element={<Projects />} />
                <Route path="/aboutme" exact element={<AboutMe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
