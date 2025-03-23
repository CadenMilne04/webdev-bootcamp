import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    //Stateful Variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Hooks
    const navigateTo = useNavigate();

    //Functions
    async function registerUser(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        const data = await response.json();

        if (data.status === "ok") {
            navigateTo("login");
        }

        console.log(data);
    }

    return (
        <div className="container gy-2 my-5 w-25">
            <h1 style={{ textAlign: "center" }}>Register</h1>
            <form onSubmit={registerUser}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-100"
                    type="text"
                    placeholder="Name"
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-100 my-2"
                    type="text"
                    placeholder="Email"
                />
                <br />

                <input
                    value={[password]}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-100"
                    type="password"
                    placeholder="Password"
                />
                <br />

                <input
                    type="submit"
                    value="Register"
                    className="w-50 mt-2 btn btn-primary"
                />
            </form>
        </div>
    );
}

export default Register;
