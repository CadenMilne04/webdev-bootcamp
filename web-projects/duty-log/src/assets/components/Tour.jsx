import React, { useState } from "react";
import ListLoader from "./ListLoader";

function Tour(props) {
    const [hidden, setHidden] = useState(true);

    return (
        <div className="d-flex flex-column m-2 p-1 bg-secondary rounded-3">
            <div className="d-flex">
                <h1 className="m-0 w-50">Tour: {props.tourNumber + 1}</h1>
                <div className="d-flex justify-content-end w-50"></div>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setHidden(!hidden);
                    }}
                >
                    {hidden ? <>👇</> : <>👆</>}
                </button>
            </div>

            {!hidden && (
                <>
                    <label>Start Time:</label>
                    <input
                        type="time"
                        placeholder="example: 12:00AM"
                        onChange={(e) => {
                            const temp = [...props.tours];
                            temp[props.tourNumber].start = e.target.value + "";
                            props.setTours(temp);
                            props.updateData();
                        }}
                        value={props.storedTourData.start}
                    />

                    <label>Resident Interactions:</label>
                    <div className="d-flex flex-column gap-1">
                        {props.tour.resInteractions.map((floor, i) => {
                            return (
                                <div key={i} className="d-flex gap-1">
                                    <input
                                        type="text"
                                        placeholder="Floor #"
                                        onChange={(e) => {
                                            const temp = [...props.tours];
                                            temp[
                                                props.tourNumber
                                            ].resInteractions[i] =
                                                e.target.value;
                                            props.setTours(temp);
                                            props.updateData();
                                        }}
                                        value={
                                            props.storedTourData
                                                .resInteractions[i]
                                        }
                                    />

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={(e) => {
                                            const temp = [...props.tours];
                                            temp[
                                                props.tourNumber
                                            ].resInteractions.splice(i, 1);
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
                                temp[props.tourNumber].resInteractions.push("");
                                props.setTours(temp);
                                props.updateData();
                            }}
                        >
                            New Resident Interaction
                        </button>
                    </div>

                    <label>Staff Interactions:</label>
                    <div className="d-flex flex-column gap-1">
                        {props.tour.staffInteractions.map((floor, i) => {
                            return (
                                <div key={i} className="d-flex gap-1">
                                    <input
                                        type="text"
                                        placeholder="Floor #"
                                        onChange={(e) => {
                                            const temp = [...props.tours];
                                            temp[
                                                props.tourNumber
                                            ].staffInteractions[i] =
                                                e.target.value;
                                            props.setTours(temp);
                                            props.updateData();
                                        }}
                                        value={
                                            props.storedTourData
                                                .staffInteractions[i]
                                        }
                                    />

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={(e) => {
                                            const temp = [...props.tours];
                                            temp[
                                                props.tourNumber
                                            ].staffInteractions.splice(i, 1);
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
                                temp[props.tourNumber].staffInteractions.push(
                                    ""
                                );
                                props.setTours(temp);
                                props.updateData();
                            }}
                        >
                            New Staff Interaction
                        </button>
                    </div>

                    <label>Incidents:</label>
                    <div className="d-flex flex-column gap-1">
                        {props.tour.incidents.map((floor, i) => {
                            return (
                                <div key={i} className="d-flex gap-1">
                                    <input
                                        type="text"
                                        placeholder="Type + Floor #"
                                        onChange={(e) => {
                                            const temp = [...props.tours];
                                            temp[
                                                props.tourNumber
                                            ].incidents[i] =
                                                e.target.value;
                                            props.setTours(temp);
                                            props.updateData();
                                        }}
                                        value={
                                            props.storedTourData
                                                .incidents[i]
                                        }
                                    />

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={(e) => {
                                            const temp = [...props.tours];
                                            temp[
                                                props.tourNumber
                                            ].incidents.splice(i, 1);
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
                                temp[props.tourNumber].incidents.push(
                                    ""
                                );
                                props.setTours(temp);
                                props.updateData();
                            }}
                        >
                            New Incident
                        </button>
                    </div>

                    <label>Maintenance:</label>
                    <div className="d-flex flex-column gap-1">
                        {props.tour.maintenance.map((floor, i) => {
                            return (
                                <div key={i} className="d-flex gap-1">
                                    <input
                                        type="text"
                                        placeholder="Type + Floor #"
                                        onChange={(e) => {
                                            const temp = [...props.tours];
                                            temp[
                                                props.tourNumber
                                            ].maintenance[i] =
                                                e.target.value;
                                            props.setTours(temp);
                                            props.updateData();
                                        }}
                                        value={
                                            props.storedTourData
                                                .maintenance[i]
                                        }
                                    />

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={(e) => {
                                            const temp = [...props.tours];
                                            temp[
                                                props.tourNumber
                                            ].maintenance.splice(i, 1);
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
                                temp[props.tourNumber].maintenance.push(
                                    ""
                                );
                                props.setTours(temp);
                                props.updateData();
                            }}
                        >
                            New Maintenance
                        </button>
                    </div>


                    <label>End Time:</label>
                    <input
                        type="time"
                        placeholder="example: 12:00AM"
                        onChange={(e) => {
                            const temp = [...props.tours];
                            temp[props.tourNumber].end = e.target.value;
                            props.setTours(temp);
                            props.updateData();
                        }}
                        value={props.storedTourData.end}
                    />
                </>
            )}
        </div>
    );
}

export default Tour;
