import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function NoteItem(props) {
	return (
		<Link className="note-item" to={`edit-note/${props.id}`} key={props.id}>
			<h4 className="note-item-title">
				{props.title.length > 40
					? props.title.substring(0, 40) + '...'
					: props.title}
			</h4>
			<p>
				{props.details.length > 100
					? props.details.substring(0, 100)
					: props.details}
			</p>
		</Link>
	);
}

export default NoteItem;
