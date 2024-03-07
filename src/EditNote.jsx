import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { CiSaveDown2 } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import './App.css';

function EditNote({ notes, setNotes }) {
	const navigation = useNavigate();
	const params = useParams();

	const [editingNotes] = notes.filter((note) => {
		return params.id === note.id;
	});
	const [title, setTitle] = useState(editingNotes.title);
	const [details, setDetails] = useState(editingNotes.details);

	function handleSubmit() {
		setNotes((prevNotes) =>
			prevNotes.map((note) => {
				if (params.id === note.id) {
					return { ...note, title, details };
				} else {
					return note;
				}
			})
		);

		// redirect home
		navigation('/');
	}

	function handleRemoveClick() {
		setNotes((prevNotes) =>
			prevNotes.filter((note) => {
				return params.id !== note.id;
			})
		);

		// redirect home
		navigation('/');
	}

	return (
		<div>
			<div>
				<header className="edit-note-header">
					<Link className="buttons back-button" to="/">
						<IoChevronBack />
					</Link>
					<button className="buttons" onClick={handleSubmit}>
						<CiSaveDown2 />
					</button>
					<button className="buttons" onClick={handleRemoveClick}>
						<MdDelete />
					</button>
				</header>

				<form
					className="edit-note-form"
					onSubmit={handleSubmit}
					action="/"
				>
					<input
						className="input"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						placeholder="Title"
					/>
					<textarea
						className=" input text-area"
						value={details}
						onChange={(e) => setDetails(e.target.value)}
						placeholder="Note details ..."
						rows="10"
					></textarea>
				</form>
			</div>
		</div>
	);
}

export default EditNote;
