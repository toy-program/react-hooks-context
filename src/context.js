import React from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
	<UserContext.Provider value={{ name: "changhoi" }}>
		{children}
	</UserContext.Provider>;
};

export default UserContextProvider;
