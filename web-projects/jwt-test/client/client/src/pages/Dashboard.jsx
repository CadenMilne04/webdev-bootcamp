import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Dashboard = () => {
    //Stateful Variables
    const [quote, setQuote] = useState("");
    const [tempQuote, setTempQuote] = useState("");

    //Hooks
    const navigateTo = useNavigate();

    //Functions
    async function populateQuote() {
        const req = await fetch("https://quote-app-api-xqqf.onrender.com/api/quote", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        });

        const data = await req.json();
        if (data.status === "ok") {
            setQuote(data.quote);
        } else {
            alert(data.error);
        }
    }

    async function updateQuote(e) {
        e.preventDefault();

        const req = await fetch("https://quote-app-api-xqqf.onrender.com/api/quote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                quote: tempQuote,
            }),
        });

        const data = await req.json();
        if (data.status === "ok") {
            setQuote(tempQuote);
            setTempQuote("");
        } else {
            alert(data.error);
        }
    }

    //Run Once
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = jwt_decode(token);
            if (!user) {
                localStorage.removeItem("token");
                navigateTo("/login", { replace: true });
            } else {
                populateQuote();
            }
        } else {
            navigateTo("/login");
        }
    }, []);

    return (
        <div>
            <h1>Your quote: {quote || "No quote found"}</h1>
            <form onSubmit={updateQuote}>
                <input
                    type="text"
                    placeholder="Quote"
                    value={tempQuote}
                    onChange={(e) => setTempQuote(e.target.value)}
                />
                <input type="submit" value="update quote" />
            </form>
        </div>
    );
};

export default Dashboard;
