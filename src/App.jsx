import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './Notes';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import './App.css';

function App() {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem('notes')) || []
	);

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Notes notes={notes} setNotes={setNotes} />}
					/>
					<Route
						path="/create-notes"
						element={
							<CreateNote notes={notes} setNotes={setNotes} />
						}
					/>
					<Route
						path="/edit-note/:id"
						element={<EditNote notes={notes} setNotes={setNotes} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
