import React, { useState, useEffect } from "react";

function AllQuotes() {
    const [quotes, setQuotes] = useState([]);

    async function populateQuotes() {
        const req = await fetch("https://quote-app-api-xqqf.onrender.com/api/allQuotes");

        const data = await req.json();
        if (data.status === "ok") {
            setQuotes(data.users);
        } else {
            alert(data.error);
        }
    }

    useEffect(() => {
        populateQuotes();
    }, []);

    return (
        <div className="container m-3">
            <h1>All Quotes:</h1>
            {quotes.map((quote, i) => (
                <li key={i}>
                    "{quote.quote}"
                    <br />
                    <i>by: {quote.email}</i>
                </li>
            ))}
        </div>
    );
}

export default AllQuotes;
