import React from "react";

function Title(props) {


    return (
        <div className="mt-2 w-100 d-flex justify-content-center">
            <h1>{props.dormBuilding}</h1>
        </div>
    );
}

export default Title;
