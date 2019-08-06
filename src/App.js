import React, { useState } from "react";
import Header from "./Header";

function App() {
	const [user, setUser] = useState({
		name: "changhoi"
	});

	const changeHandler = e => {
		setUser({ name: e.target.value });
	};

	return (
		<div className="App">
			<Header />
			<h1>{user.name}</h1>
			<input type="text" onChange={changeHandler} />
		</div>
	);
}

export default App;
