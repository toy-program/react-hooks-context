import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
	const { user } = useContext(UserContext);
	return (
		<header>
			<a href="#">Home</a> Hello, {user.name}! You are{" "}
			{user.isLoggedIn ? "logged in" : "not logged in"}
		</header>
	);
};

export default Header;
