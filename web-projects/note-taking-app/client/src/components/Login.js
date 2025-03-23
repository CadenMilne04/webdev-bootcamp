import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    //Button is clicked, send a post request to server
    async function handleSubmit(e) {
        e.preventDefault();
        await axios
            .post("http://localhost:3001/login", {
                username,
                password,
            })
            .then((res) => {
                if (res.data == "invalid username or password") {
                    alert(res.data);
                } else {
                    window.localStorage.setItem("username", res.data.username);
                    window.localStorage.setItem("id", res.data._id);
                    window.localStorage.setItem("isLoggedIn", true);
                    navigate("/home");
                }
            })
            .catch((e) => {
                alert("invalid username or password");
            });
    }

    //HTML SECTION BEGINS
    return (
        <div className="center">
            <h1>Login</h1>
            <form action="POST">
                <input
                    className="mb-2 w-100"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Username"
                />
                <br />
                <input
                    className="mb-2 w-100"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                />
                <br />

                <input className="btn btn-primary w-50" type="submit" onClick={handleSubmit} />
            </form>

            <div className="d-flex align-items-baseline">
                <p>Don't have an account?</p>

                <Link className="mx-2" to="/register">Register</Link>
            </div>
        </div>
    );
}

export default Login;
