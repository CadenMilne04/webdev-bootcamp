import React from "react";

function ListLoader(props) {
    return (
        <div>
            <label>Staff Interactions:</label>
            <div className="d-flex flex-column gap-1">
                {props.list.map((floor, i) => {
                    return (
                        <div key={i} className="d-flex gap-1">
                            <input
                                type="text"
                                placeholder="Floor #"
                                onChange={(e) => {
                                    const temp = [...props.tours];
                                    temp[props.tourNumber].list[
                                        i
                                    ] = e.target.value;
                                    props.setTours(temp);
                                    props.updateData();
                                }}
                                value={
                                    props.storedTourData.list[i]
                                }
                            />

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={(e) => {
                                    const temp = [...props.tours];
                                    temp[
                                        props.tourNumber
                                    ].list.splice(i, 1);
                                    props.setTours(temp);
                                    props.updateData();
                                }}
                            >
                                X
                            </button>
                        </div>
                    );
                })}
            </div>

            <div>
                <button
                    className="btn btn-primary btn-sm my-1"
                    onClick={(e) => {
                        const temp = [...props.tours];
                        temp[props.tourNumber].list.push("");
                        props.setTours(temp);
                        props.updateData();
                    }}
                >
                    New Staff Interaction
                </button>
            </div>
        </div>
    );
}

export default ListLoader;
