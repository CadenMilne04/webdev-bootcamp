import React, { useEffect, useState, useTransition } from "react";
import NavigationPane from "../components/NavigationPane";

function WorkoutBuilder() {
	// State Variables ================================================
	const [selectedSplit, setSelectedSplit] = useState(0);
	const [selectedWorkout, setSelectedWorkout] = useState(0);
	const [selectedExcersize, setSelectedExcersize] = useState(0);
	const [selectedWorkoutName, setSelectedWorkoutName] = useState("");
	const [selectedSplitName, setSelectedSplitName] = useState("");
	const [selectedExcersizeName, setSelectedExcersizeName] = useState("");
	const [selectedExcersizeSets, setSelectedExcersizeSets] = useState(0);
	const [isPublic, setIsPublic] = useState(false);
	const [splits, setSplits] = useState([
		{
			name: "",
			workouts: [{ name: "", excersizes: [{ name: "", sets: 0 }] }],
		},
	]);

	// Dropdown Boxes Handlers ========================================
	function handleSelectedSplit(e) {
		setSelectedSplit(e.target.value);
		setSelectedSplitName(splits[e.target.value].name);
		setSelectedWorkout(0);
	}

	function handleSelectedWorkout(e) {
		setSelectedWorkout(e.target.value);
		setSelectedWorkoutName(
			splits[selectedSplit].workouts[e.target.value].name
		);
		setSelectedExcersizeSets(
			splits[selectedSplit].workouts[e.target.value].sets
		);
	}

	function handleSelectedExcersize(e) {
		setSelectedExcersize(e.target.value);
		setSelectedExcersizeName(
			splits[selectedSplit].workouts[selectedWorkout].excersizes[
				e.target.value
			].name
		);
	}

	// Input Field Handlers ==========================================
	function handleSplitNameChange(e) {
		setSelectedSplitName(e.target.value);
		let tempSplits = splits;
		tempSplits[selectedSplit].name = e.target.value;
		setSplits(tempSplits);
		saveSplitsToLocalStorage(tempSplits);
	}

	function handleWorkoutNameChange(e) {
		let tempSplits = splits;
		tempSplits[selectedSplit].workouts[selectedWorkout].name =
			e.target.value;
		setSplits(tempSplits);
		saveSplitsToLocalStorage(tempSplits);
		setSelectedWorkoutName(e.target.value);
	}

	function handleExcersizeNameChange(e) {
		setSelectedExcersizeName(e.target.value);
		let tempSplits = splits;
		tempSplits[selectedSplit].workouts[selectedWorkout].excersizes[
			selectedExcersize
		].name = e.target.value;
		setSplits(tempSplits);
		saveSplitsToLocalStorage(tempSplits);
	}

	function handleExcersizeSetChange(e) {
		setSelectedExcersizeSets(e.target.value);
		let tempSplits = splits;
		tempSplits[selectedSplit].workouts[selectedWorkout].excersizes[
			selectedExcersize
		].sets = e.target.value;
		setSplits(tempSplits);
		saveSplitsToLocalStorage(tempSplits);
	}

	// Add New Handlers ============================================
	function handleAddNewSplit() {
		let tempSplits = [
			...splits,
			{
				name: "new",
				workouts: [{ name: "", excersizes: [{ name: "", sets: 0 }] }],
			},
		];
		setSplits(tempSplits);
		saveSplitsToLocalStorage(tempSplits);
		setSelectedSplit(splits.length);
		setSelectedSplitName("new");
	}

	function handleAddNewWorkout() {
		let tempSplits = splits;
		tempSplits[selectedSplit].workouts = [
			...splits[selectedSplit].workouts,
			{ name: "new", excersizes: [{ name: "", sets: 0 }] },
		];
		setSplits(tempSplits);
		saveSplitsToLocalStorage(tempSplits);
		setSelectedWorkout(tempSplits[selectedSplit].workouts.length - 1);
		setSelectedWorkoutName("new");
	}

	function handleAddNewExcersize() {}

	// Delete Item Handlers =========================================
	function handleDeleteSplit() {
		let tempSplits = splits;
		tempSplits.splice(selectedSplit, 1);
		setSplits(tempSplits);
		saveSplitsToLocalStorage(tempSplits);
		setSelectedSplit(splits.length - 1);
	}

	function handleDeleteWorkout() {}

	function handleDeleteExcersize() {}

	// Manipulate Local Storage =====================================
	function saveSplitsToLocalStorage(listOfSplits) {
		localStorage.setItem("tempSplitData", JSON.stringify(listOfSplits));
	}

	function readSplitsFromLocalStorage() {
		setSplits(JSON.parse(localStorage.getItem("tempSplitData")));
	}

	function loadUserSplitsToLocalStorage(userSplits) {
		saveSplitsToLocalStorage(userSplits);
		readSplitsFromLocalStorage();
	}

	// Data Base Requests ===========================================
	async function uploadSplitsToDatabase() {
		const storedSplits = localStorage.getItem("tempSplitData");
		console.log(JSON.stringify(storedSplits));
		console.log("hello?");
		const response = await fetch("https://workout-app-api-oihn.onrender.com/api/addSplitTemplate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({storedSplits, isPublic})
        });

        const data = await response.json();

        if (data.status === "ok") {
            alert("successfully added!");
        } else {
            alert("error adding workout");
        }
	}

	function getSplitDataFromDatabase() {
		let userSplits = [
			{
				name: "Menzter 3 Week Rotation",
				workouts: [
					{
						name: "Back/Bi 1",
						excersizes: [
							{ name: "curl", sets: 2 },
							{ name: "pulldown", sets: 2 },
							{ name: "row", sets: 2 },
						],
					},
					{
						name: "Back/Bi 2",
						excersizes: [
							{ name: "Preacher", sets: 2 },
							{ name: "Pull Ups", sets: 2 },
							{ name: "Bent Rows", sets: 2 },
						],
					},
					{
						name: "Back/Bi 3",
						excersizes: [
							{ name: "curl", sets: 2 },
							{ name: "pulldown", sets: 2 },
							{ name: "row", sets: 2 },
						],
					},
				],
			},
			{
				name: "Push pull Legs",
				workouts: [
					{
						name: "Chest/Bi 1",
						excersizes: [
							{ name: "curl", sets: 2 },
							{ name: "pulldown", sets: 2 },
							{ name: "row", sets: 2 },
						],
					},
					{
						name: "Chest/Bi 2",
						excersizes: [
							{ name: "curl", sets: 2 },
							{ name: "pulldown", sets: 2 },
							{ name: "row", sets: 2 },
						],
					},
					{
						name: "Chest/Bi 3",
						excersizes: [
							{ name: "curl", sets: 2 },
							{ name: "pulldown", sets: 2 },
							{ name: "row", sets: 2 },
						],
					},
				],
			},
		];

		loadUserSplitsToLocalStorage(userSplits);
	}

	// Use Effect Hook (runs twice) ==================================
	useEffect(() => {
		if (localStorage.getItem("tempSplitData")) {
			readSplitsFromLocalStorage();
		} else {
			getSplitDataFromDatabase();
		}
	}, []);

	return (
		<>
			<NavigationPane />
			<div className="workout-builder-form">
				<div className="wb-dropdown-container">
					<h1>Workout Bulder</h1>
					<button
						className="btn"
						style={{ height: "30px" }}
						onClick={getSplitDataFromDatabase}
					>
						<img src="/refresh.png" alt="" />
					</button>
				</div>

				{splits ? (
					<div>
						<h2>Pick A Split To Edit:</h2>
						<div className="wb-dropdown-container">
							<select
								className="wb-dropdown"
								onChange={handleSelectedSplit}
								value={selectedSplit}
							>
								{splits.map((split, i) => {
									return (
										<option key={i} value={i}>
											{split.name}
										</option>
									);
								})}
							</select>

							<button className="btn" onClick={handleAddNewSplit}>
								<img src="/add.png" />
							</button>
						</div>
						<h3>Split Name:</h3>
						<div className="wb-dropdown-container">
							<input
								className="wb-dropdown"
								value={selectedSplitName}
								onChange={handleSplitNameChange}
								type="text"
								placeholder='ex: "Best Split Of All time"'
							/>

							<button className="btn" onClick={handleDeleteSplit}>
								<img src="/remove.png" alt="" />
							</button>
						</div>
						<h3>Workouts:</h3>
						<div className="wb-dropdown-container">
							<select
								className="wb-dropdown"
								onChange={handleSelectedWorkout}
								value = {selectedWorkout}
							>
								{splits[selectedSplit].workouts.map(
									(workout, i) => {
										return (
											<option key={i} value={i}>
												{workout.name}
											</option>
										);
									}
								)}
							</select>

							<button
								className="btn"
								onClick={handleAddNewWorkout}
							>
								<img src="/add.png" alt="" />
							</button>
						</div>
						<h4>Workout Name:</h4>
						<div className="wb-dropdown-container">
							<input
								className="wb-dropdown"
								value={selectedWorkoutName}
								onChange={handleWorkoutNameChange}
								type="text"
								placeholder='ex: "Back/Bi Day 1"'
							/>
							<button
								className="btn"
								onClick={handleDeleteWorkout}
							>
								<img src="/remove.png" alt="" />
							</button>
						</div>
						<h3>Excersizes:</h3>
						<div className="wb-dropdown-container">
							<select
								className="wb-dropdown"
								onChange={handleSelectedExcersize}
								value = {selectedExcersize}
							>
								{splits[selectedSplit].workouts[
									selectedWorkout
								].excersizes.map((exercize, i) => {
									return (
										<option key={i} value={i}>
											{exercize.name}
										</option>
									);
								})}
							</select>
							<button
								className="btn"
								onClick={handleAddNewExcersize}
							>
								<img src="/add.png" alt="" />
							</button>
						</div>

						<h4>Excersize Name:</h4>
						<div className="wb-dropdown-container">
							<input
								className="wb-dropdown"
								value={selectedExcersizeName}
								onChange={handleExcersizeNameChange}
								type="text"
								placeholder='ex: "Preacher Curl"'
							/>
							<input
								className="wb-dropdown"
								type="number"
								value={selectedExcersizeSets}
								onChange={handleExcersizeSetChange}
								placeholder="ex: 3"
							/>
							<button
								className="btn"
								onClick={handleDeleteExcersize}
							>
								<img src="/remove.png" alt="" />
							</button>
						</div>
					</div>
				) : (
					<h1>No Splits (reload)</h1>
				)}
				<button
					style={{ marginTop: "25px", color: "white" }}
					className="btn"
					onClick={uploadSplitsToDatabase}
				>
					Submit
				</button>

				<div className="nav-buffer"></div>
			</div>
		</>
	);
}

export default WorkoutBuilder;
