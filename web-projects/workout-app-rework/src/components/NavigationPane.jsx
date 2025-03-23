import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationPane() {
    const navigate = useNavigate();
    return (
        <nav>
            <ul className="nav_list">
                <li className="active">
                    <a
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <img src="home.svg" />
                    </a>
                </li>
                <li>
                    <a>
                        <img src="new.svg" />
                    </a>
                </li>
                <li>
                    <img src="saved.svg" />
                    <a href=""></a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            navigate("/workoutbuilder");
                        }}
                    >
                        <img src="build.svg" />
                    </a>
                </li>
                <li>
                    <img src="logout.svg" />
                    <a href=""></a>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationPane;
