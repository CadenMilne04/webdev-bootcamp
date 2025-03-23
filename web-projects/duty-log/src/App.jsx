import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "./assets/components/Title";
import Tour from "./assets/components/Tour";
import Log from "./assets/components/Log";

function App() {
    const [dormBuilding, setDormBuilding] = useState("Tower C");
    const [weekend, setWeekend] = useState(false);
    const [tours, setTours] = useState([]);
    const [hidden2, setHidden2] = useState(false);

    const data = JSON.parse(localStorage.getItem("dutyData"));
    
    //MAKE THESE STATEFUL!!!! THEN SEND EMAIL!
    var completedEmail = [];
    var completedEmail2 = "";

    function updateData() {
        localStorage.setItem("dutyData", JSON.stringify(tours));

        completedEmail = data.map((tour, i) => {
            return (
                "Tour " +
                (i + 1) +
                ": \n" +
                "Start: " +
                tour.start +
                "\n" +
                "Resident Interactions: " +
                tour.resInteractions +
                "\n" +
                "Staff Interactions: " +
                tour.staffInteractions +
                "\n" +
                "Incidents: " +
                tour.incidents +
                "\n" +
                "Maintenance: " +
                tour.maintenance +
                "\n" +
                "End: " +
                tour.end +
                "\n\n"
            );
        });
    
        completedEmail2 =
            "Date: " +
            data[0].date +
            "\n" +
            "RA on Duty: " +
            data[0].raOnDuty +
            "\n\n" +
            completedEmail.join("");
    }

    async function handleDayChange() {
        setWeekend(!weekend);
        if (!weekend && tours.length < 4) {
            const temp = data;
            temp.push({
                start: "",
                end: "",
                resInteractions: [""],
                staffInteractions: [""],
            });

            setTours(temp);
            localStorage.setItem("dutyData", JSON.stringify(temp));
        } else {
            const temp = data;
            temp.pop();
            setTours(temp);
            localStorage.setItem("dutyData", JSON.stringify(temp));
        }
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    useEffect(() => {
        let abc = [];
        for (let i = 0; i < 3; i++) {
            abc = [
                ...abc,
                {
                    date: "",
                    raOnDuty: "",
                    rdCall: "",
                    start: "",
                    end: "",
                    resInteractions: [],
                    staffInteractions: [],
                    incidents: [],
                    maintenance: [],
                },
            ];
        }

        if (!localStorage.getItem("dutyData")) {
            localStorage.setItem("dutyData", JSON.stringify(abc));
            setTours(abc);
        } else {
            setTours(JSON.parse(localStorage.getItem("dutyData")));
        }
    }, []);

    return (
        <div>
            <Title dormBuilding={dormBuilding} />

            <div className="d-flex flex-column bg-secondary rounded-2 m-2 p-2 gap-2">
                <label>
                    <input
                        className="mx-2"
                        type="checkbox"
                        onChange={handleDayChange}
                        value={weekend}
                    />
                    Weekend?
                </label>

                <label className="mx-2">Date:</label>
                <input
                    type="date"
                    onChange={(e) => {
                        const temp = [...tours];
                        temp[0].date = e.target.value;
                        setTours(temp);
                        updateData();
                    }}
                    value={data ? data[0].date : ""}
                />

                <label className="mx-2">RA(s) on duty:</label>
                <input
                    type="text"
                    placeholder="ex: RA John, RA Jane"
                    onChange={(e) => {
                        const temp = [...tours];
                        temp[0].raOnDuty = e.target.value;
                        setTours(temp);
                        updateData();
                    }}
                    value={data ? data[0].raOnDuty : ""}
                />

                <label className="mx-2">RD Call:</label>
                <input
                    type="text"
                    placeholder="ex: RA Delontai called at 8:45PM"
                    onChange={(e) => {
                        const temp = [...tours];
                        temp[0].rdCall = e.target.value;
                        setTours(temp);
                        updateData();
                    }}
                    value={data ? data[0].rdCall : ""}
                />
            </div>

            {data &&
                data.map((tour, i) => {
                    return (
                        <Tour
                            key={i}
                            tour={tour}
                            tours={tours}
                            tourNumber={i}
                            storedTourData={data[i]}
                            updateData={updateData}
                            setTours={setTours}
                        />
                    );
                })}
            <div className="d-flex justify-content-center">
                <button className="btn btn-success">Submit</button>
            </div>
            {hidden2 && <Log data={data} />}

            <form
                className="d-flex flex-column gap-1 m-3"
                ref={form}
                onSubmit={sendEmail}
            >
                <label>To:</label>
                <input
                    type="text"
                    placeholder="Fill out "
                    name="user_name"
                    value={"Tower C Staff"}
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="user_email"
                    value="TWCstaff@groups.pitt.edu"
                    readOnly={true}
                />
                <label>Message:</label>
                <textarea
                    name="message"
                    value={completedEmail2}
                    readOnly={true}
                />
                <input
                    className="btn btn-success"
                    type="submit"
                    value="Send Email"
                />
            </form>
        </div>
    );
}

export default App;
