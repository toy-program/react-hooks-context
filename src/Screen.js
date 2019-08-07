import React, { useContext } from "react";
import Header from "./Header";
import { UserContext, useFunc, useUser } from "./context";

const Screen = () => {
	const user = useUser();
	const fn = useFunc();

	return (
		<>
			<Header />
			<h1>{user.isLoggedIn ? "true" : "false"}, First Screen</h1>
			<button onClick={fn.logUserIn}>Log user in</button>
		</>
	);
};

export default Screen;
