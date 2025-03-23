import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Public() {
    const loggedIn = window.localStorage.getItem("isLoggedIn");

    const [user, setUser] = useState("");
    const [id, setId] = useState("");
    const [notes, setNotes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            const storedUsername = window.localStorage.getItem("username");
            const storedId = window.localStorage.getItem("id");
            setUser(storedUsername);
            setId(storedId);
            setIsLoaded(false);
        } else {
            navigate("/login");
        }
    }, []);

    //loadNotes();

    async function loadNotes() {
        await axios
            .get("http://localhost:3001/getPublicNotes")
            .then((res) => {
                setNotes(res.data);
            })
            .catch((e) => {
                alert("Something went wrong");
            });
    }

    if (!isLoaded) {
        loadNotes();
        setIsLoaded(true);
    }

    function handleLogout() {
        window.localStorage.removeItem("isLoggedIn");
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("id");
        navigate("/login");
    }
    return (
        <div className="mx-5 my-3">
            <div className="d-flex align-items-center">
                <h1 className="m-0 w-50">Public Notes:</h1>
                <div className="w-50 d-flex align-items-center justify-content-end">
                    <h5 className="m-1 mx-2">Logged in as: {user}</h5>
                    <button className="btn btn-success m-1">
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/home"
                        >
                            🏠 Home
                        </Link>
                    </button>
                    <button
                        className="btn btn-danger m-1"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
            <hr />

            {notes.length >= 1 ? (
                notes.toReversed().map((item, i) => {
                    return (
                        <div key={i}>
                            <h2>{item.noteTitle}</h2> <p>{item.noteBody}</p>{" "}
                            <p>{item.time}</p>
                            <p>By: {item.userName}</p>
                            <hr />
                        </div>
                    );
                })
            ) : isLoaded ? (
                <h1>No Notes</h1>
            ) : (
                <h1>Loading Notes</h1>
            )}
        </div>
    );
}

export default Public;
