import React from "react";
import Header from "../components/Header";
import ScrollAnimation from "react-animate-on-scroll";

function Home() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div
                className="d-flex flex-wrap"
                style={{ width: "80%", height: "85vh" }}
            >
                <div className="d-flex w-50 flex-column align-items-start justify-content-center gap-0">
                    <h5>👋 my name is:</h5>
                    <h1 className="text-primary">Caden Milne</h1>
                    <h3 style={{ width: "400px" }}>Fullstack Web Developer</h3>
                    <div>
                        <button className="m-1 btn btn-primary shadow">
                            Hire Me
                        </button>
                        <button className="m-1 btn btn-outline-primary shadow">
                            View My Projects
                        </button>
                    </div>
                </div>
                <div
                    style={{ width: "500px" }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <img
                        src="/headshot.png"
                        className=""
                        style={{ width: "300px" }}
                    />
                </div>
            </div>

            <div className="w-100 d-flex justify-content-center">
                <h3>👇 Scroll to learn more! 👇</h3>
            </div>

            <div
                className="d-flex mt-5 flex-column justify-content-center align-items-center"
                style={{ width: "80%", height: "100vh" }}
            >
                    <div className="d-flex flex-column align-items-center">
                        <h2 style={{ textAlign: "center" }}>
                            My Web Development{" "}
                            <span className="text-primary">Tech</span> Stack:{" "}
                        </h2>
                        <p className="text-secondary">
                            (aka: <span className="text-primary">MERN</span>)
                        </p>
                    </div>

                <ScrollAnimation animateIn="bounceInLeft">
                    <div className="d-flex justify-content-center flex-wrap gap-5">
                        <i
                            class="devicon-mongodb-plain-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-express-original-wordmark"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-react-original-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-nodejs-plain-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>

                        <div className="w-100 d-flex justify-content-center">
                            <h3>👇 Keep Scrolling! 👇</h3>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

            <div
                className="d-flex my-5 flex-column align-items-center justify-content-center"
                style={{ width: "80%", height: "100vh" }}
            >
                    <div className="d-flex flex-column align-items-center">
                        <h2 style={{ textAlign: "center" }}>
                            My other strong{" "}
                            <span className="text-primary">technologies</span>{" "}
                            include:{" "}
                        </h2>
                        <p className="text-secondary">
                            (Technologies I've used extensively)
                        </p>
                    </div>

                <ScrollAnimation animateIn="bounceInRight">
                    <div className="d-flex justify-content-center flex-wrap gap-5">
                        <i
                            class="devicon-github-original-wordmark"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-javascript-plain colored"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-html5-plain-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-css3-plain-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>

                        <i
                            class="devicon-git-plain-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-npm-original-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-threejs-original-wordmark"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-bootstrap-plain-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>

                        <div className="w-100 d-flex justify-content-center">
                            <h3>👇 More Below! 👇</h3>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

            <div
                className="d-flex mb-5 flex-column justify-content-center align-items-center"
                style={{ width: "80%", height: "100vh" }}
            >
                    <div className="d-flex flex-column align-items-center">
                        <h2 style={{ textAlign: "center" }}>
                            More strong{" "}
                            <span className="text-primary">unrelated</span>{" "}
                            technologies include:{" "}
                        </h2>
                        <p
                            style={{ textAlign: "center" }}
                            className="text-secondary"
                        >
                            (Technologies I've used extensively outside of Web
                            Development)
                        </p>
                    </div>

                <ScrollAnimation animateIn="bounceInLeft">
                    <div className="d-flex justify-content-center flex-wrap gap-5">
                        <i
                            class="devicon-java-plain-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-python-plain-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-raspberrypi-line-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-pandas-original-wordmark"
                            style={{ fontSize: "100px" }}
                        ></i>
                        <i
                            class="devicon-tensorflow-original-wordmark colored"
                            style={{ fontSize: "100px" }}
                        ></i>

                        <i
                            class="devicon-salesforce-plain colored"
                            style={{ fontSize: "100px" }}
                        ></i>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default Home;
