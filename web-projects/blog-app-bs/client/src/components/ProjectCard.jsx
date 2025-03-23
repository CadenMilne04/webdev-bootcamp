import React from "react";

function ProjectCard(props) {
    return (
        <div className="Container">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.img} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href={props.link} className="btn btn-primary">
                        Check it out!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
