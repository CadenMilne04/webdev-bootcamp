import React, { useState } from "react";

function Login() {
    //Stateful Variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Functions
    async function loginUser(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (data.user) {
            localStorage.setItem("token", data.user);
            alert("Login successful!");
            window.location.href = "/dashboard";
        } else {
            alert("Invalid Username or Password.");
        }

        console.log(data);
    }

    return (
        <div className="container gy-2 my-5 w-25">
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <form onSubmit={loginUser}>
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
                    value="Login"
                    className="w-50 mt-2 btn btn-primary"
                />
            </form>
        </div>
    );
}

export default Login;
