import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";

const Dashboard = () => {
    //Hooks
    const navigateTo = useNavigate();

    //Functions
    async function populateQuote() {
        const req = await fetch("http://localhost:3000/api/quote", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        });

        const data = req.json();
        console.log(data);
    }

    //Run Once
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                localStorage.removeItem("token");
                navigateTo("/login", {replace: true});
            } else {
                populateQuote();
            }
        }
    }, []);

    return <h1>hello world</h1>;
};

export default Dashboard;
