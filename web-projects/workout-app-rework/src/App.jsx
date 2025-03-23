import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WorkoutBuilder from "./pages/WorkoutBuilder";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workoutbuilder" element={<WorkoutBuilder />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
