import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NoteItem from './NoteItem';
import { CiSearch } from 'react-icons/ci';
import { CiSquarePlus } from 'react-icons/ci';
import './App.css';

function Notes({ notes }) {
	const [clicked, setClicked] = useState(false);
	const [filteredNotes, setFilteredNotes] = useState(notes);

	const myNotes = filteredNotes.map((note) => {
		return (
			<NoteItem
				key={note.id}
				id={note.id}
				title={note.title}
				details={note.details}
			/>
		);
	});

	function handleClick() {
		setClicked((prev) => !prev);
	}

	function handleSearchKeyword(e) {
		const searchedWord = e.target.value.toLowerCase();
		const searchedNotes = notes.filter((note) => {
			return note.title.includes(searchedWord);
		});
		setFilteredNotes(searchedNotes);
	}

	return (
		<div className="notes-container">
			<div className="notes">
				<header className="notes-header">
					<h2>My Notes</h2>
					{clicked ? (
						<input
							onChange={(e) => handleSearchKeyword(e)}
							className="input search-bar"
							type="text"
							autoFocus
							placeholder="Keyword..."
						/>
					) : null}
					<button onClick={handleClick} className="buttons">
						<CiSearch />
					</button>
				</header>
				<div className="note-items">{myNotes}</div>
			</div>
			<div className="plus-button">
				<Link className="buttons" to="/create-notes">
					<CiSquarePlus />
				</Link>
			</div>
		</div>
	);
}

export default Notes;
