import React, { useState, useContext } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		name: "changhoi",
		isLoggedIn: false
	});

	const logUserIn = () => setUser({ ...user, isLoggedIn: true });

	return (
		<UserContext.Provider value={{ user, fn: { logUserIn } }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const { user } = useContext(UserContext);
	return user;
};

export const useFunc = () => {
	const { fn } = useContext(UserContext);
	return fn;
};

export default UserContextProvider;
