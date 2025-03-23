import React from "react";

function Log(props) {
    return (
        <div className="bg-secondary rounded-3 p-2 m-3">
            {props.data &&
                props.data.map((tour, i) => {
                    return (
                        <div key={i}>
                            <h1>Tour {i + 1}:</h1>
                            <h3>Start: {tour.start}</h3>

                            {tour.resInteractions.map((floor, i) => {
                                return (
                                    <h6 key={i}>
                                        Resident Interaction {i + 1}: {floor}
                                    </h6>
                                );
                            })}

                            {tour.staffInteractions.map((floor, i) => {
                                return (
                                    <h6 key={i}>
                                        Staff Interaction {i + 1}: {floor}
                                    </h6>
                                );
                            })}

                            <h3>End: {tour.end}</h3>

                            <hr></hr>
                        </div>
                    );
                })}
        </div>
    );
}

export default Log;
