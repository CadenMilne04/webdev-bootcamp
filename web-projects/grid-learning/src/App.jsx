import React from "react";
import "./App.scss";

function App() {
    return (
        <div className="outline-grid">
            <div className="navbar">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className="sidebar">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className="grid">
                <div className="card">Hello!</div>
                <div className="card">b</div>
                <div className="card">c</div>
                <div className="card">d</div>
                <div className="card">e</div>
                <div className="card">f</div>
                <div className="card">g</div>
                <div className="card">h</div>
                <div className="card">i</div>
            </div>
        </div>
    );
}

export default App;
