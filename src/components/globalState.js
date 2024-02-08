// GlobalState.js
import React, {useState, useContext} from "react";

const GlobalStateContext = React.createContext();

export const GlobalStateProvider = ({children}) => {
	const [someData, setSomeData] = useState(null);

	const setGlobalData = (data) => {
		setSomeData(data);
	};

	return <GlobalStateContext.Provider value={{someData, setGlobalData}}>{children}</GlobalStateContext.Provider>;
};

export const useGlobalState = () => {
	return useContext(GlobalStateContext);
};
