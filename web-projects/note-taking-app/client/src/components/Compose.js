import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Compose() {
    const loggedIn = window.localStorage.getItem("isLoggedIn");

    const [user, setUser] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [checked, setChecked] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            const storedUsername = window.localStorage.getItem("username");
            const storedId = window.localStorage.getItem("id");
            setUser(storedUsername);
            setId(storedId);
        } else {
            navigate("/login");
        }
    }, []);

    function handleChecked() {
        setChecked(!checked);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        var currentdate = new Date();
        var datetime =
            "Submitted On: " +
            currentdate.getDate() +
            "/" +
            (currentdate.getMonth() + 1) +
            "/" +
            currentdate.getFullYear() +
            " @ " +
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds();
        await axios
            .post("http://localhost:3001/addNote", {
                user,
                title,
                body,
                datetime,
                checked,
            })
            .then((res) => {
                if (res.data == "success") {
                    navigate("/home");
                    window.location.reload(false);
                } else {
                    alert(res.data);
                }
            })
            .catch((e) => {
                alert("Something went wrong");
            });

        setTitle("");
        setBody("");
    }

    return (
        <div className="center" style={{ width: "65%" }}>
            <h1>✏️ New Note</h1>
            <form action="POST">
                <input
                    className="w-100 mb-2"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                />

                <br />

                <textarea
                    className="w-100"
                    type="text"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    placeholder="Body"
                />
                <input
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                />

                <label className="m-2">
                    Public?
                    <input
                        className="mx-2"
                        type="checkbox"
                        checked={checked}
                        onChange={handleChecked}
                    />
                </label>

                <br />
            </form>

            <Link to="/home">Home</Link>
        </div>
    );
}

export default Compose;
