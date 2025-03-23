import React, { useEffect, useState } from "react";
import NavigationPane from "../components/NavigationPane";

function Home() {
    const [name, setName] = useState("null");
    const [height, setHeight] = useState("null");
    const [weight, setWeight] = useState("null");
    const [quote, setQuote] = useState("null");
    const [author, setAuthor] = useState("null");

    async function getQuote() {
        const response = await fetch(
            "https://api.api-ninjas.com/v1/quotes?category=inspirational",
            {
                headers: {
                    "X-Api-Key": "IGc23Ayxb1//cioRXwfZPA==WlULzOWIwVaJfo5f",
                },
            }
        );
        
        const quote = await response.json();
        console.log(quote)
        setQuote(quote[0].quote)
        setAuthor(quote[0].author)
    }

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <>
            <NavigationPane />
            <section className="home_grid">
                <div className="profile">👋 Hello, {name}!</div>
                <div className="height">Height: {height}</div>
                <div className="weight">Weight: {weight}</div>
                <div className="quote">
                <h5>"{quote}"</h5>
                <p>-{author}</p>
                </div>
                <div className="goals">Goals</div>
            </section>
        </>
    );
}

export default Home;
