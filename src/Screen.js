import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "./context";

const Screen = () => {
	const { user, logUserIn } = useContext(UserContext);
	return (
		<>
			<Header />
			<h1>{user.isLoggedIn}, First Screen</h1>
			<button onClick={logUserIn}>Log user in</button>
		</>
	);
};

export default Screen;
