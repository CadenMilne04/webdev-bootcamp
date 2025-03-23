import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            await axios
                .post("http://localhost:3001/", {
                    email,
                    password,
                })
                .then((res) => {
                    if (res.data == "exist") {
                        history("/home", { state: { id: email } });
                    } else if (res.data == "notexist") {
                        alert("User have not signed up");
                    } else if (res.data == "incorrectdetails") {
                        alert("Incorrect Password");
                    }
                })
                .catch((e) => {
                    alert("wrong details");
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="d-flex flex-column p-4 align-items-center position-absolute center">
            <div className="d-flex flex-column">
                <h1 className="h3 mb-3 fw-normal">Login</h1>
                <form action="POST">
                    <div>
                        <input
                            className="text-field my-2"
                            type="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="email"
                        ></input>
                    </div>
                    <div>
                        <input
                            className="text-field my-2"
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            placeholder="password"
                        ></input>
                    </div>

                    <input
                        type="submit"
                        className="btn btn-primary"
                        onClick={submit}
                    />
                </form>

                <br />
                <p>OR</p>
                <br />

                <Link to="/signup" className="btn btn-secondary">Signup Page</Link>
            </div>
        </div>
    );
}

export default Login;
