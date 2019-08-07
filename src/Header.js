import React from "react";
import { useUser } from "./context";

const Header = () => {
	const { name, isLoggedIn } = useUser();
	return (
		<header>
			<a href="#">Home</a> Hello, {name}! You are{" "}
			{isLoggedIn ? "logged in" : "not logged in"}
		</header>
	);
};

export default Header;
