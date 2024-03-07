import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { CiSaveDown2 } from 'react-icons/ci';
import { nanoid } from 'nanoid';
import './App.css';

function CreateNote({ setNotes }) {
	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (title && details) {
			const note = {
				id: nanoid(),
				title,
				details,
			};
			setNotes((prevNotes) => [note, ...prevNotes]);
			setDetails('');
			setTitle('');

			// redirect to home page
			navigate('/');
		} else {
			console.log('please enter title or details');
		}
	};

	return (
		<div>
			<header className="create-note-header">
				<Link className="buttons" to="/">
					<IoChevronBack />
				</Link>
				<button
					aria-label="Save note"
					className="buttons"
					type="submit"
					onClick={handleSubmit}
				>
					<CiSaveDown2 />
				</button>
			</header>

			<form
				className="create-note-form"
				action="/"
				onSubmit={handleSubmit}
			>
				<input
					className="input"
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					placeholder="Title"
					value={title ? title : ''}
				/>
				<textarea
					className="input text-area"
					onChange={(e) => setDetails(e.target.value)}
					placeholder="Note details ..."
					rows="10"
					value={details ? details : ''}
				></textarea>
			</form>
		</div>
	);
}

export default CreateNote;
