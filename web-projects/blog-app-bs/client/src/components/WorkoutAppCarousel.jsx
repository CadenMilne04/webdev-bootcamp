import React from "react";

function WorkOutAppCarousel() {
    return (
        <div class="d-flex justify-content-center">
            <div className="d-flex justify-content-center align-items-center w-50">
                <div className="d-flex flex-column w-75 gap-3">
                    <h1>💪 Workout App</h1>
                    <div className="d-flex flex-wrap gap-1">
                        <i
                            class="devicon-mongodb-plain-wordmark colored"
                            style={{ fontSize: "50px" }}
                        ></i>
                        <i
                            class="devicon-express-original-wordmark"
                            style={{ fontSize: "50px" }}
                        ></i>
                        <i
                            class="devicon-react-original-wordmark colored"
                            style={{ fontSize: "50px" }}
                        ></i>
                        <i
                            class="devicon-nodejs-plain-wordmark colored"
                            style={{ fontSize: "50px" }}
                        ></i>{" "}
                    </div>
                    <h4>
                        Fullstack, fully functioning workout builder and
                        tracker. With real active users.
                    </h4>
                    <button className="btn btn-primary">Check it out!</button>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center w-50">
                <img style={{ height: "85vh" }} src="/workoutapp.png"></img>
            </div>
        </div>
    );
}

export default WorkOutAppCarousel;
