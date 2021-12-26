import React from "react";
import { Link } from "react-router-dom";

const getTitle = (note) => {
	let title = note.body.split("\n")[0];
	if (title.length > 10) {
		return title.slice(0, 10);
	}
	return title;
};

//format date and time of the update date field
const getDateTime = (note) => {
	return new Date(note.updated).toLocaleString();
};

//format content to display below title
const getContent = (note) => {
	let title = getTitle(note);
	let content = note.body.replaceAll("\n", " ");
	content = content.replaceAll(title, "");

	if (content.length > 10) {
		return content.slice(0, 30) + ".....";
	} else {
		return content;
	}
};
const ListItem = ({ note }) => {
	return (
		<Link to={`/note/${note.id}`}>
			<div className='notes-list-item'>
				<h3>{getTitle(note)}</h3>
				<p>
					<span>{getDateTime(note)}</span> - <span>{getContent(note)}</span>
				</p>
			</div>
		</Link>
	);
};

export default ListItem;
