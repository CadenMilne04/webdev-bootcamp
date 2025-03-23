import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
    const loggedIn = window.localStorage.getItem("isLoggedIn");

    const [user, setUser] = useState("");
    const [id, setId] = useState("");
    const [notes, setNotes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [deletingId, setDeletingId] = useState("");

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
            .post("http://localhost:3001/getNotes", {
                user,
            })
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

    function handleComposeClick() {
        navigate("/compose");
    }

    function handleLogout() {
        window.localStorage.removeItem("isLoggedIn");
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("id");
        navigate("/login");
    }

    async function handleDelete() {
        await axios
            .post("http://localhost:3001/deleteNote", {
                deletingId,
            })
            .then((res) => {
                window.location.reload(false);
            })
            .catch((e) => {
                alert("Something went wrong");
            });
    }

    return (
        <div className="mx-5">
            <div className="d-flex align-items-center w-100 mt-3">
                <h1 className="m-0 w-50">Your Notes</h1>
                <div className="d-flex align-items-center justify-content-end w-50">
                    <h5 className="m-1 mx-2">Logged in as: {user}</h5>
                    <button className="btn btn-success m-1">
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/public"
                        >
                            Public
                        </Link>
                    </button>

                    <button
                        className="btn btn-primary m-1"
                        onClick={handleComposeClick}
                    >
                        Compose
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
                            <h2>{item.noteTitle}</h2>{" "}
                            {item.isPublic ? (
                                <p>
                                    <i>🌎 Public 🌎</i>
                                </p>
                            ) : null}
                            <p>{item.noteBody}</p> <p>{item.time}</p>
                            <button
                                className="btn btn-danger"
                                onClick={(e) => {
                                    setDeletingId(item._id);
                                }}
                            >
                                Delete
                            </button>
                            {deletingId === item._id ? (
                                <button
                                    className="mx-2 btn btn-warning"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleDelete();
                                    }}
                                >
                                    Are you sure?
                                </button>
                            ) : null}
                            <hr />
                        </div>
                    );
                })
            ) : (
                <h1>No Notes</h1>
            )}
        </div>
    );
}

export default Home;
