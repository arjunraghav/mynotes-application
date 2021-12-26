import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = ({ match, history }) => {
	//getting note id from url
	const noteId = match.params.id;

	//set note state
	const [note, setNote] = useState(null);

	useEffect(() => {
		getNote();
	}, [noteId]);

	//get note with note id fetched from url
	const getNote = async () => {
		if (noteId === "new") return;
		const res = await fetch(`/api/note/${noteId}/`);
		const data = await res.json();
		setNote(data);
	};

	//updating note after on change event
	const updateNote = async () => {
		await fetch(`/api/note/${noteId}/update/`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(note),
		});
	};

	//creating note after on change event
	const createNote = async () => {
		await fetch(`/api/note/create/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(note),
		});
	};

	//delete note on click event
	const deleteNote = async () => {
		await fetch(`/api/note/${noteId}/delete/`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		history.push("/");
	};

	// handle submit with arrow
	const submitHandler = () => {
		if (noteId !== "new" && !note.body) {
			deleteNote();
		} else if (noteId !== "new") {
			updateNote();
		} else if (noteId === "new" && note.body !== null) {
			createNote();
		}
		history.push("/");
	};

	return (
		<div className='note'>
			<div className='note-header'>
				<h3>
					<ArrowLeft onClick={submitHandler} />
				</h3>
				{noteId !== "new" ? (
					<button onClick={deleteNote}>Delete</button>
				) : (
					<button onClick={submitHandler}>Done</button>
				)}
			</div>
			<textarea
				onChange={(event) => {
					setNote({ ...note, body: event.target.value });
				}}
				value={note?.body}></textarea>
		</div>
	);
};

export default NotePage;
