import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Home() {
    const location = useLocation();

    return (
        <div className="homepage">
            <h1>Hello {location.state.id} and welcome to the home.</h1>
            <div class="card" style={{ width: "18rem" }}>
                <img
                    src="https://picsum.photos/200"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <Link to="/home" className="btn btn-primary">
                        Go Somewhere
                    </Link>
                </div>
            </div>
            Í
        </div>
    );
}

export default Home;
