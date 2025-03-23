import React from "react";

function App() {
    const [milePace, setMilePace] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    async function hangleSumbit() {
        const data = fetch(
            "https://api.getsongbpm.com/tempo/?api_key=5b2c7473dfca36217f38dc1aaad1e99e&bpm=130&limit=10",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <div className="container my-3 d-flex flex-column align-items-center justify-content-center">
            <h1>Pace to Playlist 🏃</h1>
            <div className="d-flex flex-column gap-3" action="">
                <label htmlFor="mile-pace" className="d-flex flex-column">
                    Mile Pace:
                    <input
                        type="text"
                        name="mile-pace"
                        placeholder="Mile Pace"
                        onChange={(e) => setMilePace(e.target.value)}
                    />
                </label>

                <label htmlFor="height" className="d-flex flex-column">
                    Height:
                    <input
                        type="text"
                        name="height"
                        placeholder="Height"
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </label>

                <button className="btn btn-primary" onClick={hangleSumbit}>
                    Find Songs!
                </button>
            </div>
        </div>
    );
}

export default App;
