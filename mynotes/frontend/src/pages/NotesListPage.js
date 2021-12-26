import React, { useState, useEffect } from "react";
import "../App.css";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";

const NotesListPage = () => {
	//store notes data in state variable
	const [notes, setNotes] = useState([]);

	//execute getNotes first time when page refresh
	useEffect(() => {
		getNotes();
	}, []);

	//make api call
	const getNotes = async () => {
		const res = await fetch("/api/notes/");
		const data = await res.json();
		console.log(data);
		setNotes(data);
	};

	return (
		<div className='notes'>
			<div className='note-header'>
				<h2 className='note-title'>&#9782; Notes</h2>
				<p className='notes-count'>{notes.length}</p>
			</div>
			<div className='notes-list'>
				{notes.map((note, index) => (
					<ListItem key={index} note={note} />
				))}
			</div>
			<AddButton />
		</div>
	);
};

export default NotesListPage;
