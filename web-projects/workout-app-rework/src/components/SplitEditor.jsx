import React from "react";

function SplitEditor(props) {
    const [selectedWorkoutName, setSelectedWorkoutName] = useState("");
    const [selectedSplitName, setSelectedSplitName] = useState("");
    const [selectedWorkout, setSelectedWorkout] = useState(0);


    function handleSelectedWorkout(e) {
        setSelectedWorkout(e.target.value);
        setSelectedWorkoutName(
            props.splitToEdit.workouts[e.target.value].name
        );
    }

    function handleWorkoutNameChange(e) {
        setSelectedWorkoutName(e.target.value);
    }

    function handleSplitNameChange(e) {
        setSelectedSplitName(e.target.value);
    }

    return (
        <div>
            <h3>Split Name:</h3>
            <input
                value={props.splitToEdit.name}
                onChange={handleSplitNameChange}
                type="text"
                placeholder='ex: "Best Split Of All time"'
            />
            <h3>Workouts:</h3>
            <select onChange={handleSelectedWorkout}>
                <option value="New">Brand New Workout</option>
                {props.splitToEdit.workouts.map((workout, i) => {
                    return <option value={i}>{workout.name}</option>;
                })}
            </select>
            <h4>Workout Name:</h4>
            <input
                value={selectedWorkoutName}
                onChange={handleWorkoutNameChange}
                type="text"
                placeholder='ex: "Back/Bi Day 1"'
            />
            <h3>Excersizes:</h3>
            <select>
                <option value="New">Brand New Workout</option>
                {props.splitToEdit.workouts[selectedWorkout].excersizes.map(
                    (exercize, i) => {
                        return (
                            <option value={exercize.name}>
                                {exercize.name}
                            </option>
                        );
                    }
                )}
            </select>
        </div>
    );
}

export default SplitEditor;
